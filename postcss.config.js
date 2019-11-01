const postcssCssNext = require('postcss-cssnext');
const postcssImport = require('postcss-import');

//the order of plugin is important, it is applied from last to first
//postcssImport then postcssCssNext
//this file using in webpack
module.exports = {
    plugins:[
        postcssCssNext,
        postcssImport
    ]
};