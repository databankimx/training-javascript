$("#form").on("submit", function (event) {
	event.preventDefault();
	const email = $("#email");
	const valid = email.val().trim() !== "" && email.val().includes("@");
	email.toggleClass("invalid", !valid);
	$("#output").text(valid ? "Ready to send." : "Enter a valid email address.");
});
