var Metalsmith  = require('metalsmith');
var msMetadataDir = require('metalsmith-metadata-directory');
var msFrontmatter = require('metalsmith-matters');
var msInPlace = require('metalsmith-in-place');
var msCleanUrls = require('metalsmith-clean-urls');

var msDebug = require('metalsmith-debug');

Metalsmith(__dirname)         // __dirname defined by node.js:
                              // name of current working directory
  .source('./source')            // source directory
  .destination('./public')     // destination directory
  .clean(true)                // clean destination before
  .frontmatter(false)
  .use(msMetadataDir({
    directory: './data/**/*.yml'
  }))
  .use(msFrontmatter({
    namespace: 'page'
  }))
  .use(msDebug())
  .use(msInPlace())
  .use(msCleanUrls())
  .build(function(err) {      // build process
    if (err) console.log(err);       // error handling is required
  });