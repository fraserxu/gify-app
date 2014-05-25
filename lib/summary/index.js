'use strict';

var classes = require('classes');
var prettyBytes = require('pretty-bytes');

/**
 * Initialize a new `Summary`
 *
 * @api public
 */

function Summary() {
    if (!(this instanceof Summary)) {
        return new Summary();
    }

    this.el = document.createElement('div');
    this.classes = classes(this.el);
    this.classes.add('Summary');
    this.diff = 0;
}

/**
 * Add element
 *
 * @api public
 */

Summary.prototype.add = function () {
    document.body.appendChild(this.el);
    return this;
};

/**
 * Show summary
 *
 * @param {Array} files
 * @api public
 */

Summary.prototype.show = function (files) {
    var self = this;
    files.forEach(function(file) {
      self.el.innerHTML += '<img src=' + file + ' />';
    });
    this.classes.add('is-visible');
    return this;
};

/**
 * Hide summary
 *
 * @api public
 */

Summary.prototype.hide = function () {
    this.files = 0;
    this.diff = 0;
    this.classes.remove('is-visible');
    return this;
};

/**
 * Module exports
 */

module.exports = Summary;
