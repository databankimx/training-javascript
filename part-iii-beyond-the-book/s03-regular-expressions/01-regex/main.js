const text = 'Invoice INV-1042, then INV-2048.';
const ids = [...text.matchAll(/INV-(\d{4})/g)].map(match => match[1]);
console.log(ids.join(', '));
console.log(/^INV-\d{4}$/.test('INV-1042'));
