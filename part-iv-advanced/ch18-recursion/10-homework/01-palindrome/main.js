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
