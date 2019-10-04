'use strict';

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
const githubRepo = /github\.com\/eclipsesource\/tabris-js\/tree\/([^\/]+)/;

// Prevent false negatives:
const whitelist = [
  /developer\.apple\.com/,
  /www\.linkedin\.com\/company\/eclipsesource/,
  /cordova\.apache\.org\/docs\/en\/6\.x\/reference\/cordova-cli\/index\.html/,
  /example\.com/, // used in example code
  /marketplace\.visualstudio\.com/, // returns 404 in node only for some reason,
  /cordova\.io/ // certificate issues
];

const preReleaseWhitelist = [
  /tabrisjs\.com\/downloads\/ebook\/tabrisjs-3.\d.0.pdf/
];

if (process.argv[1].endsWith('check-links.js')) {

  let followExternal = true;
  let startUrl = null;

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

  checkLinks({startUrl, followExternal})
    .catch(err => console.error('Error: ' + err.stack))
    .then(() => console.log('done'));
}

/**
 * Returns true if all links work
 * @param {{
 *   startUrl: string,
 *   followExternal?: boolean,
 *   preRelease?: boolean,
 *   branch: string
 * }} options
 * @returns {boolean}
 */
async function checkLinks(options) {
  const startUrl = options.startUrl;
  const url = options.url || startUrl;
  const branch = options.branch;
  /**
   * @type {{[url: string]: {error: string, html: string}}}
   */
  const cache = options.cache || {};
  const followExternal = options.followExternal || false;
  const preRelease = !!options.preRelease;
  const doNotCheck = whitelist.concat(preRelease ? preReleaseWhitelist : []);
  const html = cache[url] ? cache[url].html : await get(url);
  const links = extractLinks(html).filter(link => !link.startsWith('mailto:'));
  for (const href of links) {
    const resolvedLink = resolveLink(url, href, branch);
    if (
      doNotCheck.some(regexp => regexp.test(resolvedLink))
      || (!resolvedLink.startsWith(startUrl) && !followExternal)
    ) {
      continue;
    }
    try {
      if (!/^[\/\.\#a-zA-Z]/.test(href) || /\s/.test(href)) {
        throw new Error('Invalid URL');
      }
      if (!(resolvedLink in cache)) {
        if (isHtml(await head(resolvedLink))) {
          if (resolvedLink.startsWith(startUrl) && resolvedLink.endsWith('.md')) {
            throw new Error('URL has wrong file extension');
          }
          cache[resolvedLink] = {error: null, html: await get(resolvedLink)};
        } else {
          cache[resolvedLink] = {error: null, html: null};
        }
        if (resolvedLink.startsWith(startUrl) && typeof cache[resolvedLink].html === 'string') {
          await checkLinks({url: resolvedLink, startUrl, followExternal, cache, branch, preRelease});
        }
      } else if (cache[resolvedLink].error) {
        console.error(`In ${url}: ${href} (${resolvedLink}) : ${cache[resolvedLink].error}`);
      }
      if (!cache[resolvedLink].error) {
        checkDeepLink(url, cache[resolvedLink].html, href);
      }
    } catch (ex) {
      if (ex.message.indexOf('self signed certificate') !== -1) {
        cache[resolvedLink] = {error: null, html: null};
      } else {
        cache[resolvedLink] = {error: ex.message, html: null};
        if (ex.message.indexOf('HTTP') === -1 && ex.message.indexOf('URL') === -1) {
          console.error(`In ${url}: ${href} : ${ex.stack}`);
        } else {
          console.error(`In ${url}: ${href} : ${ex.message}`);
        }
      }
    }
  }
  return !Object.keys(cache).some(url => cache[url].error !== null);
}

exports.checkLinks = checkLinks;

function checkDeepLink(url, html, href) {
  const anchor = href.split('#')[1];
  if (!anchor) {
    return;
  }
  try {
    if (!html) {
      throw new Error('Can not deep-link to non-html content');
    }
    if (
      (html.indexOf(`id="${anchor}"`) === -1)
      && (html.indexOf(`id=${anchor}`) === -1) // some extern sites do this
    ) {
      if (html.toLowerCase().indexOf(`id="${anchor.toLowerCase()}"`) !== -1) {
        throw new Error(`Anchor found but case doesn't match`);
      } else {
        throw new Error('Anchor not found');
      }
    }
  } catch (ex) {
    console.error(`In ${url}: '${href}': ${ex.message}`);
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
      throw new Error('HTTP ' + res.statusCode + ' for ' + url);
    }
    return res.headers;
  });
}

function get(url) {
  return request('GET', url).then(res => {
    if (res.statusCode >= 400) {
      throw new Error('HTTP ' + res.statusCode + ' for ' + url);
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

function resolveLink(url, href, branch) {
  if (branch && githubRepo.test(href)) {
    return href.replace(RegExp.$1, branch);
  }
  if (href.startsWith('//')) {
    return 'http:' + href;
  } else if (href.startsWith('http')) {
    return href;
  }
  return resolve(url, href).replace(/[\#\?].*$/, '');
}
