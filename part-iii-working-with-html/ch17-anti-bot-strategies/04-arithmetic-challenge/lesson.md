# An arithmetic challenge

A challenge asks a question that is cheap for a person and inconvenient for a script. The traditional name for this family of tools is CAPTCHA, which stands for "Completely Automated Public Turing test to tell Computers and Humans Apart". The arithmetic challenge in this step is a tiny, self-made version. It shows the mechanism clearly, and it shows where the mechanism runs out.

No real CAPTCHA service is used in these lessons. The ones on the public web need network access and site keys, and they only work correctly when the server verifies the answer. We'll describe them later in this step, without depending on them.

## Ask a question, check the answer

The script chooses two numbers, builds the question, and keeps the expected answer in a variable:

```javascript
function newQuestion() {
    const first = randomInt(2, 19);
    const second = randomInt(2, 19);
    expected = first + second;
    question.textContent = `What is ${first} + ${second}?`;
    answer.value = "";
}
```

The check on submit compares what was typed with that answer:

```javascript
const given = answer.value.trim();
if (given === "" || Number(given) !== expected) {
    status.textContent = "That answer is not right. Try again.";
    return;
}
```

```text
That answer is not right. Try again.
```

Unlike the honeypot and timing checks, this one talks to the person. A challenge that fails silently leaves an honest user wondering what they did wrong, and the feedback is part of the design.

Note the `given === ""` test. `Number("")` is `0`, not `NaN`. Without the empty check, an empty answer would be compared with `expected`, which is never zero here, so it would still fail. The test matters more when a challenge's answer can be zero, and this one should be written defensively anyway.

## Each answer works once

After a comment is accepted, the script asks a new question. The old answer is discarded. This matters because a bot that solves one challenge should not be able to reuse the answer on every later submission.

## Where this breaks down

A sum of two small numbers is easy to solve in a few lines of code, or with a calculator, or by reading the question with a text recognizer. The challenge proves only that something can read the text on the screen. Real CAPTCHAs use distorted images, audio, or behavioral signals to make that harder, and they still get broken, sometimes by services built for that purpose.

Challenges also have a cost. They slow down real people, and they are hard for people with some disabilities, for people using screen readers, and for anyone without a convenient way to read a distorted image. Design the challenge for the audience first, and treat the difficulty for bots as a secondary goal.

## Real CAPTCHA services

Public services such as reCAPTCHA, hCaptcha, and Cloudflare Turnstile work by loading their own script into your page. They decide, using signals from the browser and their own models, whether a visitor is likely to be a person, and they hand your form a token. Your server must then send that token, together with a secret key, to the service's verification endpoint. The browser alone cannot be trusted to say the check passed.

That server step is the part that matters, and it is the reason this course describes these services rather than using them. Adding the third-party script to a lesson would require network access and keys, and it would hide the mechanism behind a vendor's code.

## Try it yourself

- Press **Simulate a bot**. The comment is refused with the message about the answer. Why does the bot fail here, when the honeypot and timing steps did not show an error?
- Type the correct sum and submit a comment. Then submit a second comment using the same answer. What happens, and why?
- Change `randomInt(2, 19)` to `randomInt(0, 0)` so both numbers are zero. Does the challenge still behave correctly? Think about what an answer of `0` does to the empty check.

## Going further

Think about who a challenge excludes before deciding it is worth using. A text question is harder for a person with a reading disability. An image puzzle is harder for a person who cannot see it. Every anti-bot measure has a cost paid by someone, so the cost should be chosen on purpose.

## More background

See [OWASP: Automated Threats Handbook](https://owasp.org/www-project-automated-threats-to-web-applications/), [MDN: Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), and [W3C: Making content usable for people with cognitive and learning disabilities](https://www.w3.org/WAI/WCAG21/Understanding/making-content-usable.html).

---
