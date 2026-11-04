$("#save").on("click", function () {
	const email = $("#email").val().trim();
	const valid = email.includes("@");

	$("#email").toggleClass("invalid", !valid);
	$("#message").text(valid ? "Saved." : "Enter an email address.");

	if (!valid) {
		$("#email").trigger("focus");
	}
});
