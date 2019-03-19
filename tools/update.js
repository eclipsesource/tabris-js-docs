const {checkLinks} = require('./check-links');

const child_process = require('child_process');
const path = require('path');
const fs = require('fs');

const TABRIS_REPO_DIR = path.join(__dirname, '../../tabris-js');
const DOC_OUT_DIR = path.join(TABRIS_REPO_DIR, 'build', 'doc');
const DOCS_TARGET_DIR = path.join(__dirname, '..', 'docs');
const LATEST_DIR = path.join(__dirname, '..', 'docs', 'latest');
const DATA_DIR = path.join(__dirname, '..', 'docs', '_data');
const MAIN_YML = path.join(DATA_DIR, 'main.yml');
const INDEX_MD = path.join(DOCS_TARGET_DIR, 'index.md');
const INDEX_HEAD = `---
---
# Tabris.js Documentation

`;

(async () => {
  await preChecks();
  const version = getTargetVersion();
  const targetDir = path.join(DOCS_TARGET_DIR, version);
  const targetYml = path.join(DATA_DIR, `toc-${version.replace(/\./g, '-')}.yml`);
  const sourceYml = path.join(targetDir, 'toc.yml');
  console.log('Prepare Jekyll...');
  await exec('bundle update'); // this sometimes fails fo now reason, just try again
  clean(targetDir);
  clean(targetYml);
  clean(LATEST_DIR);
  await generateDocs();
  console.log(`Copy files from ${DOC_OUT_DIR} to ${targetDir}...`);
  copyDir(DOC_OUT_DIR, targetDir);
  console.log(`Move ${sourceYml} to ${targetYml}`);
  fs.renameSync(sourceYml, targetYml);
  console.log('Write main.yml');
  fs.writeFileSync(MAIN_YML, `latest: ${version}\n`)
  console.log(`Copy files from ${targetDir} to ${LATEST_DIR}...`);
  copyDir(targetDir, LATEST_DIR);
  console.log('Update index');
  updateIndex();
  await startJekyll();
  console.log('Checking links...');
  await checkLinks({startUrl: 'http://127.0.0.1:4000/latest/', followExternal: true});
  console.log('ALL DONE');
  console.log('Press CTRL+C to kill server');
})().catch(err => {
  console.error(err);
  console.error('Abort');
  process.exit(1);
})

async function preChecks() {
  const ruby = await exec('ruby -v');
  console.log(ruby);
  if (!/^ruby\s2\.[0-9]\..*/.test(ruby)) {
    throw new Error('ruby 2.x not found, please install from ruby-lang.org');
  }
  const bundler = await exec('bundler -v');
  console.log(bundler);
  if (!/^Bundler\sversion\s2\.[0-9]+.*/.test(bundler)) {
    throw new Error('bundler 2.x not found, please run "gem install bundler"');
  }
  const grunt = await exec('grunt --version');
  console.log(grunt);
  if (!/grunt\-cli\sv1\.[0-9]+.*/.test(grunt)) {
    throw new Error('grunt-cli 1.x not found, please run "npm grunt-cli -g"');
  }
  const package_json = getTabrisPackageJson();
  if (package_json.name !== 'tabris') {
    throw new Error('Tabris repo not found at ' + TABRIS_REPO_DIR);
  }
  console.log('Tabris ' + package_json.version);
  const tabris_node_modules = fs.readdirSync(path.join(TABRIS_REPO_DIR, 'node_modules'));
  console.log(tabris_node_modules.length + ' Tabris dependencies already installed');
  if (!tabris_node_modules.length) {
    throw new Error('Tabris dependencies not installed, run "npm install" in Tabris repo');
  }
}

function clean(target) {
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      console.warn(`Target directory ${target} already exists, delete it...`);
      rmDir(target);
      console.warn(target + ' deleted');
    } else {
      console.warn(`Target file ${target} already exists, delete it...`);
      fs.unlinkSync(target);
      console.warn(target + ' deleted');
    }
    console.log('Target directory deleted.')
  } else {
    console.log(target + ' does not exit');
  }
}

async function generateDocs() {
  console.log('Generating docs...');
  let genError;
  try {
    // grunt may print to stderr due to json linting, that's accepted for now
    await exec(`grunt --gruntfile ${path.join(TABRIS_REPO_DIR, 'Gruntfile.js')} --release clean doc`);
  } catch (ex) {
    genError = ex.message;
  }
  if (!fs.readdirSync(DOC_OUT_DIR).length) {
    console.error(genError);
    throw new Error('No files found in ' + DOC_OUT_DIR);
  }
  const toc = path.join(DOC_OUT_DIR, 'toc.yml');
  if (!fs.existsSync(toc)) {
    throw new Error(toc + ' not found');
  }
}

function updateIndex() {
  const toc = fs.readdirSync(DOCS_TARGET_DIR)
    .filter(entry => /^[1-9]\..*$/.test(entry))
    .sort()
    .concat(['latest'])
    .reverse()
    .map(version => `* [${version}](${version}/)`)
    .join('\n');
  fs.writeFileSync(INDEX_MD, INDEX_HEAD + toc);
}

async function startJekyll() {
  return new Promise((resolve, reject) => {
    console.log('Starting Jekyll, this may take a while...');
    const proc = child_process.exec('bundle exec jekyll serve --incremental --host 0.0.0.0', {cwd: DOCS_TARGET_DIR});
    let started = false;
    proc.stderr.on('data', chunk => {
      if (started) {
        return;
      }
      console.error(chunk.toString());
    });
    proc.stdout.on('data', chunk => {
      if (started) {
        return;
      }
      console.log(chunk.toString());
      if (chunk.toString().indexOf('Server running') !== -1) {
        started = true;
        resolve();
      }
    });
    setTimeout(() => {
      reject(new Error('Jekyll Timeout'));
    }, 1000 * 120);
  });
}

function getTargetVersion() {
  const version = getTabrisPackageJson().version;
  const [major, minor] = version.split('.');
  const postFix = version.split('-')[1];
  return `${major}.${minor}${postFix ? '-' + postFix : ''}`;
}

function getTabrisPackageJson() {
  return JSON.parse(fs.readFileSync(path.join(TABRIS_REPO_DIR, './package.json')));
}

function copyDir(source, target) {
  fs.mkdirSync(target);
  if (fs.lstatSync(source).isDirectory()) {
    fs.readdirSync(source).forEach(entry => {
      const sourceFile = path.join(source, entry);
      const targetFile = path.join(target, entry);
      if (fs.lstatSync(sourceFile).isDirectory() ) {
        copyDir(sourceFile, targetFile);
      } else {
        fs.copyFileSync(sourceFile, targetFile);
      }
    });
  } else {
    throw new Error('Not a directory: ' + target);
  }
}

function rmDir(target) {
  if (fs.lstatSync(target).isDirectory()) {
    fs.readdirSync(target).forEach(entry => {
      const targetFile = path.join(target, entry);
      if (fs.lstatSync(targetFile).isDirectory() ) {
        rmDir(targetFile);
      } else {
        fs.unlinkSync(targetFile);
      }
    });
    fs.rmdirSync(target);
  } else {
    throw new Error('Not a directory: ' + target);
  }
}
async function exec(command) {
  const cwd = path.join(__dirname, '..');
  return new Promise((resolve, reject) => {
    try {
      child_process.exec(command, {cwd, timeout: 20000}, (err, stdout, stderr) => {
        if (err || stderr.length) {
          reject(new Error(stdout.toString() + '\n' + stderr.toString() + (err ? '\n' + err.message : '')));
        } else {
          resolve(stdout.toString().trim());
        }
      });
    } catch (ex) {
      reject(ex);
    }
  });
}
