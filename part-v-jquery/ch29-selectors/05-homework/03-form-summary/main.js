const checked = $("input:checked").length;
const region = $("#region option:selected").text();

$("#output").text(`Checked: ${checked}; Region: ${region}`);
console.log(`Checked: ${checked}`);
