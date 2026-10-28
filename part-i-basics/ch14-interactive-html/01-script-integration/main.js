const button = document.querySelector('#greet');
const output = document.querySelector('#message');
button.addEventListener('click', () => {
  output.textContent = 'JavaScript connected to HTML';
  output.classList.add('success');
});
