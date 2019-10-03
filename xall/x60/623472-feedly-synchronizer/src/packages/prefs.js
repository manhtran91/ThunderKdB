/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Speak Words.
 *
 * The Initial Developer of the Original Code is The Mozilla Foundation.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Edward Lee <edilee@mozilla.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

/**
 * Get the preference value of type specified in PREFS
 */

Components.utils.import("resource://gre/modules/Services.jsm");

function getPref(key, aDefault) {
  // Cache the prefbranch after first use
  if (getPref.branch === undefined || getPref.branch === null)
    getPref.branch = Services.prefs.getBranch(PREF_BRANCH);

  var prefType = getPref.branch.getPrefType(key);

  // underlying preferences object throws an exception if pref doesn't exist
  if (prefType == getPref.branch.PREF_INVALID)
    return aDefault;

  // Figure out what type of pref to fetch
  switch (typeof PREFS[key]) {
    case "boolean":
      return getPref.branch.getBoolPref(key);
    case "number":
    	return getPref.branch.getIntPref(key);
    case "string":
      return getPref.branch.getCharPref(key);
  }
  return null;
}

/**
 * Initialize default preferences specified in PREFS
 */
function setDefaultPrefs() {
  let branch = Services.prefs.getDefaultBranch(PREF_BRANCH);
  for (let key in PREFS) {
	let val = PREFS[key];
    switch (typeof val) {
      case "boolean":
        branch.setBoolPref(key, val);
        break;
      case "number":
    	branch.setIntPref(key, val);
    	break;
      case "string":
        branch.setCharPref(key, val);
        break;
    }
  }
}

//Function taken from Bitcoin Venezuela Add-On. (c) Alexander Salas
function setPref(aKey, aVal) {
  switch (typeof(aVal)) {
    case "string":
      let branch = Services.prefs.getBranch(PREF_BRANCH);
      branch.setStringPref(aKey, aVal);
      break;
  }
}