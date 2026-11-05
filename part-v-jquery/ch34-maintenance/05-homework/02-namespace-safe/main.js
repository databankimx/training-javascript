const jq = $.noConflict();

jq("#run").on("click", function () {
	jq("#output").text("The jQuery alias is working without occupying $.");
});
