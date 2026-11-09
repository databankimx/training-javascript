$("#inspect").on("click", function () {
  $("#output").text(`jQuery ${$.fn.jquery} is loaded; plugins extend $.fn.`);
  console.log(typeof $.fn.jquery, typeof $.fn);
});
