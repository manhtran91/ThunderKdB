if ("undefined" == typeof(wdw_newToken)) {
	var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");
	var { XPCOMUtils } = ChromeUtils.import("resource://gre/modules/XPCOMUtils.jsm");
	XPCOMUtils.defineLazyModuleGetter(this, "cardbookRepository", "chrome://cardbook/content/cardbookRepository.js", "cardbookRepository");

	var EXPORTED_SYMBOLS = ["wdw_newToken"];
	var wdw_newToken = {

		load: function () {
			var myWindowTitle = cardbookRepository.strBundle.formatStringFromName("newTokenTitle", [window.arguments[0].operationMail], 1);
			document.getElementById('wdw_newToken').setAttribute("title", myWindowTitle);
			var myWindowDescription = cardbookRepository.strBundle.formatStringFromName("newTokenDescription", [window.arguments[0].operationMail], 1);
			document.getElementById('dialogMessage').textContent = myWindowDescription;
			var a = 1;
		},

		closeKO: function () {
			cardbookRepository.cardbookRefreshTokenError[window.arguments[0].dirPrefId]++;
			cardbookRepository.cardbookRefreshTokenResponse[window.arguments[0].dirPrefId]++;
			cardbookRepository.cardbookServerSyncResponse[window.arguments[0].dirPrefId]++;
			cardbookRepository.lTimerNewRefreshTokenAll[window.arguments[0].dirPrefId].cancel();
			close();
		}
	};

};
