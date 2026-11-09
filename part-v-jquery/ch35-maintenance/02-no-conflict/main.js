const jq = $.noConflict(true);

jq("#run").on("click", function () {
	jq("#output").text("jQuery is using its private alias.");
});
