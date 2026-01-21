webpackJsonp([0,6],[
/* 0 */
/***/ (function(module, exports) {

	function Localization() {
	    this.localization = window.localizationKeys;
	}
	window.Localization = new Localization();
	
	/**
	 * Returns the sum of a and b
	 * @param {string} key
	 * @returns {string}
	 */
	Localization.prototype.getText = function(key) {
	    var value = this.localization.text[key];
	
	    if (value === undefined) {
	        console.log("mangler key", key)
	        return "BLANK";
	    }
	
	    return value;
	};


/***/ })
]);
//# sourceMappingURL=LocalizationUtil.b53b17d9a3a84e618ba6.js.map