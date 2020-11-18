/*jshint esversion: 6 */

/** @typedef {object} EnvVariables
 * @property {string} GOOGLE_MAPS_API_KEY,
 * @property {string} UBER_CLIENT_ID
 * @property {string} COOKIEBOT_SRC
 * @property {string} COOKIEBOT_CONSENT_DECLARATION
 * @property {string} COOKIEBOT_CONSENT_HEAD
 * @property {string} COOKIEBOT_CONSENT_HEAD_DATA_CBID
 * @property {string} TAWKTO
 */
/** @type {EnvVariables} */
const {
	REACT_APP_GOOGLE_MAPS_API_KEY: GOOGLE_MAPS_API_KEY,
	REACT_APP_UBER_CLIENT_ID: UBER_CLIENT_ID,
	REACT_APP_COOKIEBOT_SRC: COOKIEBOT_SRC,
	REACT_APP_COOKIEBOT_CONSENT_DECLARATION: COOKIEBOT_CONSENT_DECLARATION,
	REACT_APP_COOKIEBOT_CONSENT_HEAD: COOKIEBOT_CONSENT_HEAD,
	REACT_APP_COOKIEBOT_CONSENT_HEAD_DATA_CBID: COOKIEBOT_CONSENT_HEAD_DATA_CBID,
	REACT_APP_TAWKTO: TAWKTO,
} = process.env;

/** @type {Object} altCity */
const alternativeCityNamesLookup = {
	'bangalore urban': 'bangalore',
	bengaluru: 'bangalore',
};

export {
	GOOGLE_MAPS_API_KEY,
	UBER_CLIENT_ID,
	alternativeCityNamesLookup,
	COOKIEBOT_SRC,
	COOKIEBOT_CONSENT_DECLARATION,
	COOKIEBOT_CONSENT_HEAD,
	COOKIEBOT_CONSENT_HEAD_DATA_CBID,
	TAWKTO,
};
