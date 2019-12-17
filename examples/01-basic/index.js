const MivaValidate = require('@miva_ssoule/lsk-validation-validator');

let emails = ['foo@bar', 'foo@example.com'];

let results = emails.map(MivaValidate.email);

console.log( results );
console.log( emails[0], MivaValidate.email(emails[0]) )
console.log( emails[1], MivaValidate.email(emails[1]) )
