const panel = $("#orders").closest(".orders");
const active = panel.find("#orders").children("li").not(".cancelled");

active.addClass("active");
$("#output").text(`Active orders: ${active.length}`);
console.log(`Active orders: ${active.length}`);
