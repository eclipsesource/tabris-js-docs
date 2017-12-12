# Documentation for Tabris.js

This GitHub repository contains the documentation for [Tabris.js](https://tabrisjs.com/).

The content of this repository will be published on the [Tabris.js portal](https://tabrisjs.com/documentation/).

### Local setup

See: https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

Update:

    cd docs/
    bundle update

Run:

    cd docs/
    bundle exec jekyll serve --incremental --host 0.0.0.0

### Updating

- Perform a release build of tabris-js (`grunt --release`)
- Update the latest version in the config file [main.yml](./docs/_data/main.yml) if needed.
- Perform these steps:

```
VERSION=2.0

rm -r docs/$VERSION/ docs/latest/
cp -a ../tabris-js/build/doc/ docs/$VERSION/
mv docs/$VERSION/toc.yml docs/_data/toc-${VERSION/./-}.yml
mv docs/$VERSION/faq.md docs/faq/index.md
cp -a docs/$VERSION/ docs/latest/
```

- Run `node tools/check-links.js http://127.0.0.1:4000/`

### Handling of latest/

There is no redirection feature in Jekyll. Hence `docs/latest/` is an exact copy for `docs/version/`. As the files are the same, they do not require additional space in the git directory.
