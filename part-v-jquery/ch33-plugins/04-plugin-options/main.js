$("#start").on("click", function () {
  $("#bar").progressbar({ value: 65 });
  $("#output").text("Widget initialized at 65%.");
});
$("#stop").on("click", function () {
  if ($("#bar").hasClass("ui-progressbar")) $("#bar").progressbar("destroy");
  $("#output").text("Widget destroyed; original element remains.");
});
