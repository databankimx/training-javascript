const before = $("#note").val();
$("#note").val("Leave package at reception");
const after = $("#note").val();

$("#output").text(`Before: ${before}; After: ${after}`);
console.log("Read with no argument, changed with an argument.");
