'use strict';

var cheerio = require('cheerio');

exports.strip = function(str, tags) {
    var $ = cheerio.load(str, {decodeEntities: false});
    if (!tags || tags.length === 0) {
        return str;
    }
    tags = !Array.isArray(tags) ? [tags] : tags;
    var len = tags.length;
    while (len--) {
        $(tags[len]).remove();
    }
    return $.html();
};


// 获取标签中的文本内容
exports.fetch = function(str,tag) {
    var $ = cheerio.load(str, {decodeEntities: false});
    if (!tag) return str;
    return $(tag).html();
};

