/**
/mm5/5.00/lib/util_public.mv
	<MvFUNCTION NAME = "Email_Validate" PARAMETERS = "address" STANDARDOUTPUTLEVEL = "">
*/

module.exports = function(email){
	if( /\s/.test(email) || /\.\./.test(email) ){
		return false;
	}

	if( /@/.test(email) ){
		if( /.+@[a-z].+[a-z]{2}/i.test(email) ){
			return true;
		}
	}

	return false;
}