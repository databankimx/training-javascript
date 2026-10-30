# 19 · Event delegation and handler semantics  -  optional lecture

## Before class

We add a new button and discover that its click handler stayed behind with the old buttons. Let’s put the handler somewhere that can see the newcomers.

Read Lesson and predict the sample output. Bring one question about 19 · event delegation and handler semantics.

## Instructor demonstration

Run the original example, then ask for an explanation of the result. Work through Try it yourself together, including one awkward input. Leave enough room for a prediction before revealing the fix; otherwise we’ve demonstrated typing rather than reasoning.

## Pair discussion

Compare the listener with $("#actions").on("click", "button.remove", function(event) {...}). Explain why an arrow callback changes the meaning of this in jQuery handlers.

## Debrief

Ask for an explanation of the data flow, then invite the group to find an assumption worth testing. Keep the discussion aimed at the code. A mistaken prediction gives us something useful to investigate; it is not a personality assessment.

## Instructor additions

Add local examples, diagrams, slide links, or discussion notes here. The written lesson should still make sense to someone who missed class. Our calendars are quite capable of causing enough trouble without help from the curriculum.
