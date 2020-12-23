/**
 * INFO
 * 
 * For returning middleware if error
 * just add a response to that middleware
 */

module.exports = {

	/**
	 * Simple Log Middleware
	 * Reusable, bacause its separated from route
	 */
	logMiddlewareWorks: function (req, res, next) {
		console.log('ggcuy middleware runs');
		next();
	},

	logMiddlewareNotice: function (req, res, next) {
		console.log('ggcuy middleware NOTICE!');
		next();
	}
}