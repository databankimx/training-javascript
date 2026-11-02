# Homework: recursive palindrome checker

A palindrome reads the same forward and backward. `racecar` is a palindrome. `JavaScript` is not. The phrase `A man, a plan, a canal: Panama` becomes one when we ignore case and punctuation.

Your job is to write a recursive checker. Compare the first and last characters. If they match, call the function again for the smaller section between them. Stop when the two indexes meet or cross.

```javascript
function isPalindrome(text, left = 0, right = text.length - 1) {
  // write the base case and recursive case
}

console.log(`racecar: ${isPalindrome("racecar")}`);
console.log(`JavaScript: ${isPalindrome("javascript")}`);
```

```text
racecar: true
JavaScript: false
A man, a plan, a canal: Panama: true
```

> A palindrome check is a nice small recursion exercise because each call removes one character from each end. The problem gets smaller in a way you can see.

---

## Try it Yourself

Normalize the phrase before checking it. Compare case-insensitively and ignore every character that is not an English letter. Then add a phrase with a different kind of punctuation and decide whether your normalization handles it deliberately.

The spoiler contains one complete approach. Give your own version a fair chance before opening it.

---

## More background

See [MDN: String replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).
