'use strict';

var classes = require('classes');

/**
 * Initialize a new Options element
 *
 * @api public
 */

function Options() {
    if (!(this instanceof Options)) {
        return new Options();
    }

    this.el = document.createElement('div')
    this.classes = classes(this.el);
    this.classes.add('Options')
    this.options = [];
}

/**
 * Add element
 *
 * @api public
 */

Options.prototype.add = function () {
    document.body.appendChild(this.el);
    return this;
};

/**
 * Show options
 *
 * @param {Array} options
 * @api public
 */

Options.prototype.show = function (options) {
    this.options = options;
    var self = this;
    options.forEach(function(option) {
      self.el.innerHTML += '<span>' + option + ': </span> <input type="text" id=' + option + '>'
    });
    this.classes.add('is-visible');
    return this;
};

/**
 * Get options
 *
 * @api public
 */

Options.prototype.getAll = function () {
    var data = {};
    this.options.forEach(function(option) {
        data[option] = document.getElementById(option).value
    });

    console.log('data', data)
    return data;
};


/**
 * Hide Options
 */

Options.prototype.hide = function () {
    this.classes.remove('is-visible');
    return this;
};

/**
 * Module exports
 */

module.exports = Options;