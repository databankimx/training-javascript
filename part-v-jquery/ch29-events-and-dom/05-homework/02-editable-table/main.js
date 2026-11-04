$("#people").on("click", ".rename", function () {
  $(this).closest("tr").find("input").val("Updated person");
});

$("#people").on("click", ".remove", function () {
  $(this).closest("tr").remove();
  $("#output").text("Removed row");
});

$("#add").on("click", function () {
  $("#people").append(`
    <tr>
      <td><input aria-label="Person name" value="New person"></td>
      <td><button class="rename" type="button">Rename</button></td>
      <td><button class="remove" type="button">Remove</button></td>
    </tr>
  `);
  $("#output").text("Added row");
});
