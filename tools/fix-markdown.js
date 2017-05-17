/**
 * Tool to adjust markdown files to syntax required by GitHub pages
 * Example usage:
 * $ find docs/2.0/ -name '*.md' -exec node tools/fix-markdown.js {} \;
 */
const {readFileSync, writeFileSync} = require('fs');

let files = process.argv.slice(2);
for (let file of files) {
  processFile(file);
}

function processFile(file) {
  let content = readFileSync(file, {encoding: 'utf-8'});
  let processed = fixMarkdown(content);
  if (processed !== content) {
    writeFileSync(file, processed);
  }
}

function fixMarkdown(markdown) {
  // Ensure front matter is present
  if (!markdown.startsWith('---')) {
    markdown = '---\n---\n' + markdown;
  }
  // Add linebreaks after headers to work around
  // https://github.com/benbalter/jekyll-titles-from-headings/issues/17
  markdown = markdown.replace(/^(#+)\s+(.*)\n(\S)/gm, '$1 $2\n\n$3');
  return markdown;
}
