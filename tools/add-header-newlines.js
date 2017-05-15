/**
 * Tool to add linebreaks after headers to markdown files to work around
 * https://github.com/benbalter/jekyll-titles-from-headings/issues/17
 *
 * Example usage:
 * $ find docs/2.0/ -name '*.md' -exec node tools/add-header-newlines.js {} \;
 */
const {readFileSync, writeFileSync} = require('fs');

let file = process.argv[2];
let data = readFileSync(file, {encoding: 'utf-8'});

data = data.replace(/^(#+)\s+(.*)\n(\S)/gm, '$1 $2\n\n$3');
writeFileSync(file, data);
