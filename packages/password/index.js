/**
 /mm5/5.00/admin/validate.mv
  <MvFUNCTION NAME = "Validate_Password" PARAMETERS = "settings var, password" STANDARDOUTPUTLEVEL = "">
*/
// const DOMAIN_PW_COMPLEX = &mvtj:global:Domain:pw_complex; // 1
// const DOMAIN_PW_MIN_LENGTH = &mvtj:global:Domain:pw_min_len; // 7

module.exports = function(password, min_length, complexity){
	password = String(password);

	if( password.length < Number(min_length) ){
		return {
			result: false,
			message: 'Please enter a password that is greater than ' + min_length
		}
	}

	if( !complexity ){
		// No Complexity Requirements
		return {
			result: true
		}
	}

	var has_upper = /[A-Z]/.test(password),
		has_lower = /[a-z]/.test(password),
		has_letter = has_upper || has_lower,
		has_number = /[0-9]/.test(password),
		has_punctuation = /\W/.test(password);

	if( complexity === 1 ){
		// At Least one Letter and one Number or Punctuation Character
		if( has_letter && (has_number || has_punctuation) ){
			return {
				result: true
			}
		} else {
			return {
				result: false,
				message: 'Please enter a password that has at Least one Letter and one Number or Punctuation Character'
			}
		}
	}
	else if ( complexity === 2 ){
		// Mixed Case Letters and at Least one Number or Punctuation Character
		if( has_upper && has_lower && (has_number || has_punctuation) ){
			return {
				result: true
			}
		} else {
			return {
				result: false,
				message: 'Please enter a password that has mixed Case Letters and at Least one Number or Punctuation Character'
			}
		}
	}

	return {
		result: true
	}
}