$("#toggle").on("click", function () {
  $("#details").stop(true, true).slideToggle(200);
  const visible = $("#details").is(":visible");
  $(this).text(visible ? "Hide details" : "Show details").attr("aria-expanded", visible);
});
