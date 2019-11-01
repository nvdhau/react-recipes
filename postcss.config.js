const postcssCssNext = require('postcss-cssnext');
const postcssImport = require('postcss-import');

//the order of plugin is important, it is applied from last to first
//postcssCssNext then postcssImport
//this file using in webpack
module.exports = {
    plugins:[
        postcssImport,
        postcssCssNext
    ]
};