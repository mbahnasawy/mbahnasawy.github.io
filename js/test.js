const VALIDATOR = (function() {
	const validateFirstName = function() {
		return document.getElementById('first').value === "" ? false : true;
	};
	const validateLastName = function() {
		return document.getElementById('last').value === "" ? false : true;
	};
	const validate = function(something) {
		return validateFirstName() && validateLastName();
	};
	return {
		validate: validate
	};
})();
