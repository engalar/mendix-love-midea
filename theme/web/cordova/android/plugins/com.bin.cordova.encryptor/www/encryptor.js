cordova.define("com.bin.cordova.encryptor.Encryptor", function(require, exports, module) {
var defSuccess = function() {

 }

 var defError = function(error) {
 	console.log(error);
 }

 var exec = require('cordova/exec');

 module.exports = {
 	encrypt: function(data, success, error) {
 		exec(success || defSuccess, error || defError, "Encryptor", "encrypt", [data]);
 	},
 	decrypt: function(data, success, error) {
 		exec(success || defSuccess, error || defError, "Encryptor", "decrypt", [data]);
 	}
 };
});
