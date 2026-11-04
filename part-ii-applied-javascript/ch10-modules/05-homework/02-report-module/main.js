import { formatTaskReport, formatCompletionReport } from "./reports.js";

const person = { name: "Grace", tasks: 5, completed: 2 };
console.log(formatTaskReport(person));
console.log(formatCompletionReport(person));
