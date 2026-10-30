const app = document.querySelector('#app');
const button = document.createElement('button');
const label = document.createElement('p');
let count = 0;
button.textContent = 'Count a click';
label.textContent = 'Clicks: 0';
button.addEventListener('click', () => {
  count++;
   label.textContent = 'Clicks: ' + count;
});
app.append(button, label);
