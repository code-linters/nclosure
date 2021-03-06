
goog.provide("node.crypto.Sign.Buffer");

/**
 * @constructor
 */
node.crypto.Sign.Buffer = function() {};

/**
 * @type {number|null}
 */
node.crypto.Sign.Buffer.prototype.poolSize = null;

/**
 * @param {string} b
 */
node.crypto.Sign.Buffer.prototype.isBuffer = function(b) {
  return node.crypto.Sign.Buffer.core_.isBuffer.apply(node.crypto.Sign.Buffer.core_, arguments);
};

/**
 *
 */
node.crypto.Sign.Buffer.prototype.byteLength = function() {
  return node.crypto.Sign.Buffer.core_.byteLength.apply(node.crypto.Sign.Buffer.core_, arguments);
};


/**
 * @private
 * @type {*}
 */
node.crypto.Sign.Buffer.core_ = require("crypto").Sign.Buffer;