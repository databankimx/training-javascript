const inputs = $(":input");
const checked = $("input:checked").length;
const selected = $("#region option:selected").text();

$("#output").text(`${inputs.length} controls; ${checked} checked choice; region: ${selected}`);
console.log($("input[name='email']").val());
