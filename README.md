# Documentation for Tabris.js

This GitHub repository contains the documentation for [Tabris.js](https://tabrisjs.com/).

The content of this repository will be published on the [Tabris.js portal](https://tabrisjs.com/documentation/).

### Local setup

See: https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

Run:

    cd docs/
    bundle exec jekyll serve

### Updating

- Perform a release build of tabris-js (`grunt --release`)
- Copy the `build/doc/` directory from the tabris build to to `docs/<version>/`
- Move the `docs/<version>/toc.yml` to `docs/_data/toc-<version-with-dashes>.yml`
- Update the latest version in the config file [main.yml](./docs/_data/main.yml) if needed.
- Run `find docs/2.0/ -name '*.md' -exec node tools/fix-markdown.js {} \;`
- Run `node tools/check-links.js http://127.0.0.1:4000/`
- Copy `docs/<version>/` to `docs/latest/`

### Handling of latest/

There is no redirection feature in Jekyll. Hence `docs/latest/` is an exact copy for `docs/version/`. As the files are the same, they do not require additional space in the git directory.
