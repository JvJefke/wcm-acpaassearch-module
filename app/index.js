var cron = require("./controllers/cron");
var contentTypes = require("./helpers/contentTypes");
var searchRoutes = require("./routes/search");
var variablesHelper = require("./helpers/variables");


module.exports = function(app, hooks, info) {
	variablesHelper.set(info);

	// Initiate elastic
	require("./helpers/elastic");

	// Setup hooks
	require("./controllers/hooks")(hooks);

	// Update contentTypes
	contentTypes.reload();

	// start cronjobs
	cron.start();

	// Setup routes
	searchRoutes(app);
};
