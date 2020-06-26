"use strict";

/* globals browser */

var init = async () => {
  var l10n = {};
  l10n["pleaseDonate"]                        = browser.i18n.getMessage("pleaseDonate");
  l10n["thunderHTMLedit.Composer.Tab.Edit"]   = browser.i18n.getMessage("thunderHTMLedit.Composer.Tab.Edit");
  l10n["thunderHTMLedit.Composer.Tab.Source"] = browser.i18n.getMessage("thunderHTMLedit.Composer.Tab.Source");
  browser.ThunderHTMLedit.addComposeWindowListener(JSON.stringify(l10n));
};

init();

// console.log("ThunderHTMLedit: background");
