# Solution

One complete solution normalizes the text first, then compares matching characters recursively:

```javascript
function isPalindrome(text, left = 0, right = text.length - 1) {
  if (left >= right) return true;
  if (text[left] !== text[right]) return false;
  return isPalindrome(text, left + 1, right - 1);
}

const examples = ["racecar", "JavaScript", "A man, a plan, a canal: Panama"];
for (const example of examples) {
  const normalized = example.toLowerCase().replace(/[^a-z]/g, "");
  console.log(`${example}: ${isPalindrome(normalized)}`);
}
```

```text
racecar: true
JavaScript: false
A man, a plan, a canal: Panama: true
```

The base case is reached when the indexes meet or cross. The recursive case advances the left index and retreats the right index. Normalization is separate from the recursive comparison so each part has one job.
