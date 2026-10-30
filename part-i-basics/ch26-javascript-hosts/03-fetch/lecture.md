# 16 · HTTP, fetch, and response validation  -  optional lecture

## Before class

A request completed, so everything must be fine. Unfortunately, a server can quite successfully tell us that the thing we asked for does not exist.

Read Lesson and predict the sample output. Bring one question about 16 · http, fetch, and response validation.

## Instructor demonstration

Run the original example, then ask for an explanation of the result. Work through Try it yourself together, including one awkward input. Leave enough room for a prediction before revealing the fix; otherwise we’ve demonstrated typing rather than reasoning.

## Pair discussion

Return status 404 from the server and verify the client rejects it explicitly. Then return a string instead of a numeric lesson count.

## Debrief

Ask for an explanation of the data flow, then invite the group to find an assumption worth testing. Keep the discussion aimed at the code. A mistaken prediction gives us something useful to investigate; it is not a personality assessment.

## Instructor additions

Add local examples, diagrams, slide links, or discussion notes here. The written lesson should still make sense to someone who missed class. Our calendars are quite capable of causing enough trouble without help from the curriculum.
