/**
 * Link checker for internal and external links.
 * Requires Node 7.
 *
 * Usage:
 * $ node tools/check-links.js [--skip-external] http://127.0.0.1:4000/
 */
const http = require('http');
const https = require('https');
const {parse, resolve} = require('url');

let followExternal = true;
let startUrl = null;
let cache = {};

process.argv.slice(2).forEach(arg => {
  if (arg === '--skip-external') {
    followExternal = false;
  } else if (!startUrl) {
    startUrl = arg;
  } else {
    console.error('Unknown parameter:', arg);
  }
});

if (!startUrl) {
  console.error('Missing start URL');
  process.exit(1);
}

checkLinks(startUrl)
  .catch(err => console.error('Error: ' + err))
  .then(() => console.log('done'));

async function checkLinks(url) {
  let html = await get(url);
  cache[url] = null;
  let links = extractLinks(html).filter(link => !link.startsWith('mailto:'));
  for (href of links) {
    let link = resolve(url, href).replace(/#.*$/, '');
    if (link in cache) {
      continue;
    }
    if (link.startsWith(startUrl) || followExternal) {
      try {
        let headers = await head(link);
        cache[link] = null;
        if (link.startsWith(startUrl) && isHtml(headers)) {
          await checkLinks(link);
        }
      } catch (err) {
        cache[link] = err;
        console.error(`In ${url}: '${href}': ${err}`);
      }
    }
  }
}

function isHtml(headers) {
  return headers['content-type'] && headers['content-type'].includes('text/html');
}

function extractLinks(html, base) {
  let re = /href="(.*?)"/g;
  let links = [];
  let matches;
  while ((matches = re.exec(html)) !== null) {
    links.push(matches[1]);
  }
  return links;
}

function head(url) {
  return request('HEAD', url).then(res => {
    if (res.statusCode >= 400) {
      throw new Error('HTTP ' + res.statusCode);
    }
    return res.headers;
  });
}

function get(url) {
  return request('GET', url).then(res => {
    if (res.statusCode >= 400) {
      throw new Error('HTTP ' + res.statusCode);
    }
    return readBody(res);
  });
}

function readBody(res) {
  return new Promise((resolve, reject) => {
    let body = '';
    res.on('data', data => body += data);
    res.on('error', err => reject(err));
    res.on('end', () => resolve(body));
  });
}

function request(method, url) {
  let {protocol, hostname, port, path} = parse(url);
  let timeout = 12000;
  let options = {method, protocol, hostname, port, path, timeout};
  return new Promise((resolve, reject) => {
    let req = (protocol === 'https:' ? https : http).request(options, res => resolve(res));
    req.on('error', err => reject(err));
    req.end();
  });
}
