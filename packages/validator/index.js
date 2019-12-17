var email = require('@miva_ssoule/lsk-validation-email');
var password = require('@miva_ssoule/lsk-validation-password');
var phone = require('@miva_ssoule/lsk-validation-phone');
var zip = require('@miva_ssoule/lsk-validation-zip');

console.log('email', email('foo@bar'));

module.exports = {
	email,
	password,
	phone,
	zip
}