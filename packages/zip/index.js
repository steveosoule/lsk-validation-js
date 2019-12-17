/*
/mm5/5.00/lib/util_public.mv
  <MvFUNCTION NAME = "Zip_Validate" PARAMETERS = "zip, country" STANDARDOUTPUTLEVEL = "">
*/
module.exports = function(zip, country){
	if ( !String(zip).length ) {
		return false;
	}

	if (country === 'US') {
		return /^\d{5}(-\d{4})?$/.test(zip);
	}

	if (country === 'DE') {
		return /^\d{5}$/.test(zip);
	}

	return true;
}