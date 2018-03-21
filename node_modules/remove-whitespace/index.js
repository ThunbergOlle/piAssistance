/**
 * Module dependencies
 */

var assert = require('assert-error');
var isString = require('lodash.isstring');

var STRING_ERROR_TEXT = 'remove-whitespace: expected a string';
var EMPTY_STRING = '';
var REMOVE_WHITESPACE_REGEX = /( )/gm;

/**
 * Strip all newlines from the given value
 *
 * @param {String} val
 * @return {String}
 * @api public
 */

module.exports = function removeWhitespace(val) {
  assert(isString(val), new TypeError(STRING_ERROR_TEXT));
  return val.replace(REMOVE_WHITESPACE_REGEX, EMPTY_STRING);
};
