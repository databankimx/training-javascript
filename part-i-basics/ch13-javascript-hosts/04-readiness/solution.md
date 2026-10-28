# 17 · DOM readiness and page load  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

jQuery ready runs when the DOM is usable and also runs a registered handler if readiness has already occurred. window.onload waits for full load and assignment can replace another handler. The vanilla readyState check in main.js handles early and late registration. Call the same guarded initialization from a button to demonstrate the already-ready path; prevent duplicate event binding if init can run repeatedly.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
