# 17 · DOM readiness and page load  -  optional lecture

## Before class

The page looks ready. The DOM may agree. The images may still be having a moment. These are different milestones, and using the wrong one can produce an impressively intermittent problem.

Read Lesson and predict the sample output. Bring one question about 17 · dom readiness and page load.

## Instructor demonstration

Run the original example, then ask for an explanation of the result. Work through Try it yourself together, including one awkward input. Leave enough room for a prediction before revealing the fix; otherwise we’ve demonstrated typing rather than reasoning.

## Pair discussion

Explain why window.onload = function () {...} is not equivalent to $(document).ready(function () {...}). Write a late-safe initialization function and call it after a button click.

## Debrief

Ask for an explanation of the data flow, then invite the group to find an assumption worth testing. Keep the discussion aimed at the code. A mistaken prediction gives us something useful to investigate; it is not a personality assessment.

## Instructor additions

Add local examples, diagrams, slide links, or discussion notes here. The written lesson should still make sense to someone who missed class. Our calendars are quite capable of causing enough trouble without help from the curriculum.
