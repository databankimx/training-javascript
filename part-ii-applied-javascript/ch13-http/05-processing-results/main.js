const items = [
  { name: "Ada", stars: 120 },
  { name: "Grace", stars: 95 }
];

let totalStars = 0;

for (const item of items) {
  console.log(`${item.name}: ${item.stars}`);
  totalStars += item.stars;
}

console.log(`Average stars: ${totalStars / items.length}`);
