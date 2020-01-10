# Documentation for Tabris.js

This GitHub repository contains the documentation for [Tabris.js](https://tabris.com).

The content of this repository will be published on the [docs.tabris.com](https://docs.tabris.com).

### Dependencies

- Ruby
- Bundler
- node.js
- Grunt

The documentation is created from various git repositories, that are expected to be available locally at following locations:

|Repository|Location|
|---|---|
|https://github.com/eclipsesource/tabris-js|`../tabris-js`|
|https://github.com/eclipsesource/tabris-decorators|`../tabris-decorators`|
|https://github.com/eclipsesource/tabris-js-cli|`../tabris-js-cli`|

### Local setup

See: https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

Update:

    bundle update

Run:

    cd docs/
    bundle exec jekyll serve --incremental --host 0.0.0.0

#### Local Setup with Docker

Build:

    docker build -t tabris-docs .

Run:

    docker run -p 4000:4000 tabris-docs

Now you can open http://localhost:4000 in your browser to see the docs.

### Updating

- `node tools/update` generates documentation for the currently checked out branch of tabris-js. The server keeps running after the link checks for manual inspection
- `node tools/update release` as above, but exists with appropriate exit code after link checks
- `node tools/update pre-release` as above, but skips links not expected to work before a full release

### Checking links

- Run `node tools/check-links.js http://127.0.0.1:4000/`
