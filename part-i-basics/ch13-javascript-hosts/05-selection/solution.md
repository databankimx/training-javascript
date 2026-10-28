# 18 · DOM elements versus jQuery collections  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

Use document.querySelectorAll(".learner").forEach(node => { node.textContent = "Ready"; });. The jQuery reading equivalent is $(".learner").text("Ready"). For one node, const node = document.querySelector(".missing"); if (node) node.textContent = "Ready";. A missing jQuery selection tolerates many setter calls as a no-op; a missing native selection is null.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
