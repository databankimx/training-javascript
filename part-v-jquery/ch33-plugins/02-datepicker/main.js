$("#date").datepicker({
  dateFormat: "yy-mm-dd",
  onSelect: function (dateText) {
    $("#output").text(`Selected: ${dateText}`);
  }
});
