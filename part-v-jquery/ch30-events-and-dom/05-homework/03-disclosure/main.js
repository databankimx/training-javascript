$("#toggle").on("click", function () {
  const help = $("#help");
  const open = help.prop("hidden");
  help.prop("hidden", !open);
  $(this).attr("aria-expanded", open).text(open ? "Hide details" : "Show details");
});
