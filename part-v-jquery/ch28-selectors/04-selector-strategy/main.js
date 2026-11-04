const accountSave = $("#account-panel .save");
const allSaveButtons = $("button.save");

accountSave.addClass("preferred");
$("#output").text(`Account buttons: ${accountSave.length}; all save buttons: ${allSaveButtons.length}`);
console.log("Prefer a selector that states the relationship you actually need.");
