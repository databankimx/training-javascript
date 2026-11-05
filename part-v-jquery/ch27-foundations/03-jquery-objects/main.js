const items = $("#items li");

items.addClass("highlighted").text(function (index, text) {
  return `${index + 1}. ${text}`;
});

$("#count").text(`jQuery matched ${items.length} list items.`);
console.log(`Matched ${items.length} elements.`);
