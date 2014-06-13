'use strict';

var Drop = require('drop');
var gify = require('gify');
var Spin = require('spin');
var Summary = require('summary');
var sum = new Summary();
var Options = require('options');
var options = new Options();

/**
 * Init Summary
 */

sum.add();
options.add();

/**
 * Handle files on drop
 */

function run() {
  var drop = new Drop();
  var spin = new Spin();
  options.show(['height', 'width', 'delay', 'rate', 'start', 'duration']);

  drop.on('drop', function (files) {
    spin.show();
    sum.hide();

    var opt = options.getAll();

    gify(files, opt, function (err, files) {
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
