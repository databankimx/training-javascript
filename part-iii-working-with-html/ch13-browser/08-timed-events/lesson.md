# Timed events with `setInterval`

Some browser behavior repeats without another click. A clock, countdown, polling loop, or idle screen saver needs a timer:

```javascript
let intervalId = null;

intervalId = setInterval(() => {
    seconds += 1;
    count.textContent = `${seconds} seconds`;
}, 1000);

clearInterval(intervalId);
```

```text
The counter updates once each second until Stop is clicked.
```

> `setInterval()` schedules a function to run repeatedly after the interval in milliseconds.
>
> `clearInterval()` cancels a scheduled interval.
>
> The interval is not a promise of exact timing. If the browser is busy, a callback may run late.

Pass the function itself, not the result of calling it. `setInterval(update, 1000)` schedules `update`; `setInterval(update(), 1000)` calls it immediately and passes its return value to the timer. That tiny pair of parentheses has caused a surprising amount of debugging.

---

## Try it Yourself

Start the counter, stop it, and start it again. Confirm that clicking Start repeatedly does not create multiple timers. Add a visible “running” message and clear it when the interval stops.

---

## More background

See [MDN: setInterval](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval) and [MDN: clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval).

---
