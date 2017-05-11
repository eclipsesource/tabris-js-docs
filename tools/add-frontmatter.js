/**
 * Tool to add empty frontmatter to markdown files.
 * Example usage:
 * $ find docs/2.0/ -name '*.md' -exec node tools/add-frontmatter.js {} \;
 */
const {readFileSync, writeFileSync} = require('fs');

let file = process.argv[2];
let data = readFileSync(file, {encoding: 'utf-8'});

if (!data.startsWith('---')) {
  console.log('adding empty frontmatter to', file);
  data = '---\n---\n' + data;
  writeFileSync(file, data);
}
