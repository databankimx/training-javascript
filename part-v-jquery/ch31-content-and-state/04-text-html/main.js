const userText = "<strong>Customer supplied text</strong>";
const safeHtml = "<strong>Trusted application markup</strong>";
$("#safe").text(userText);
$("#markup").html(safeHtml);
console.log("text() displays characters; html() interprets markup.");
