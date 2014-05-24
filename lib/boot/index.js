'use strict';

var Drop = require('drop');
var gify = require('gify');
var Spin = require('spin');
var Summary = require('summary');
var sum = new Summary();

/**
 * Init Summary
 */

sum.add();

/**
 * Handle files on drop
 */

function run() {
  var drop = new Drop();
  var spin = new Spin();

  drop.on('drop', function (files) {
    spin.show();
    sum.hide();

    gify(files, function (err, files) {
      if (err) {
        throw err;
      }

      sum.show(files);
      drop.unbind();
      spin.remove();

      return run();
    });
  });
}

/**
 * Run
 */

run();
