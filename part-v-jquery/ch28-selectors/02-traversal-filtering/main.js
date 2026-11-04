const orders = $("#orders");
const shipped = orders.children("li").filter(".shipped");
const panelTitle = orders.closest(".panel").find("h2").text();

shipped.addClass("highlight");
$("#output").text(`${panelTitle}: ${shipped.length} shipped orders`);
console.log(`First order: ${orders.children().first().text()}`);
