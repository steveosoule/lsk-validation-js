/*
/mm5/5.00/lib/util_public.mv
  <MvFUNCTION NAME = "Phone_Validate" PARAMETERS = "phone, country" STANDARDOUTPUTLEVEL = "">
*/

module.exports = function(phone, country){
	if( country === 'US' || country === 'DE' ){
		phone = String(phone).replace(/[\+\/\(\)\-\x\.\s]/g, '');

		if ( !/^\d+$/.test(phone) ) {
			return false;
		}
	}

	return phone.length > 0;
}