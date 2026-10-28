# S26 · Iterators and generators (itertools counterpart)  -  optional lecture

## Before class

Sometimes we only need the next value. Building every possible value in advance can be a fairly expensive way to discover that we only wanted the first three.

Read Lesson and predict the sample output. Bring one question about s26 · iterators and generators (itertools counterpart).

## Instructor demonstration

Run the original example, then ask for an explanation of the result. Work through Try it yourself together, including one awkward input. Leave enough room for a prediction before revealing the fix; otherwise we’ve demonstrated typing rather than reasoning.

## Pair discussion

Write take(iterable, n) as a generator that returns at most n items. Test n = 0 without reading the source.

## Debrief

Ask for an explanation of the data flow, then invite the group to find an assumption worth testing. Keep the discussion aimed at the code. A mistaken prediction gives us something useful to investigate; it is not a personality assessment.

## Instructor additions

Add local examples, diagrams, slide links, or discussion notes here. The written lesson should still make sense to someone who missed class. Our calendars are quite capable of causing enough trouble without help from the curriculum.
