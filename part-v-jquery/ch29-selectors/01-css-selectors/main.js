$("#intro").addClass("chosen");
$(".note").addClass("note-mark");
$("#topics li[data-level='advanced']").addClass("advanced");
$("#output").text(`Notes: ${$("p.note").length}; advanced topics: ${$("li[data-level='advanced']").length}`);
console.log("CSS selectors can be combined in jQuery.");
