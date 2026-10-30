const app = document.querySelector('#app');
for (const name of ['Ada', 'Grace']) {
  const item = document.createElement('p');
  item.classList.add('learner');
  item.textContent = name;
  app.append(item);
}
const learners = document.querySelectorAll('.learner');
learners.forEach(node => node.classList.add('active'));
console.log('Matches:', learners.length);
console.log(document.querySelector('.missing') === null);
