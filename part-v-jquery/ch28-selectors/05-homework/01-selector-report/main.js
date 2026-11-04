const urgent = $("#tasks li.task[data-priority='urgent']");
const tasks = $("#tasks .task");

urgent.addClass("urgent");
$("#output").text(`Urgent: ${urgent.length}; Total tasks: ${tasks.length}`);
console.log(`Urgent: ${urgent.length}`);
