/* global node */
'use strict';

var each = require('each-async');
var gify = node('gify');
var path = node('path');

/**
 * Gify video
 * @param {Array} files
 * @param {Object} options
 * @param {Function} cb
 * @api public
 */

module.exports = function (files, cb) {
  var arr = [];
  each(files, function (file, i, next) {

    var output = path.join(path.dirname(file.path), path.basename(file.path, path.extname(file.path)) + '.gif');

    gify(file.path, output, function(err){
      if (err) cb(err);
      arr.push(output)
      next();
    });
  }, function (err) {
    if (err) {
      return cb(err);
    }

    cb(null, arr)
  });
};