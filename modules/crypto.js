var util = require("util");
var request = require("request");
var fs = require("fs");
var crypto = require("crypto");
var ed = require("ed25519");

// Private fields
var modules, library, self, private = {}, shared = {};

private.loaded = false;

// Constructor
function Crypto(cb, scope) {
	library = scope;
	self = this;
	self.__private = private;

	setImmediate(cb, null, self);
}

// Events
Crypto.prototype.onBind = function (scope) {
	modules = scope;
}

Crypto.prototype.onBlockchainReady = function () {
	private.loaded = true;
}

// Shared
module.exports = Crypto;
