const app=document.querySelector('#app');
app.innerHTML='<form><label>Name <input name="name" required></label><button>Greet</button></form><p aria-live="polite"></p>';
const form=app.querySelector('form');
form.addEventListener('submit',event=>{
  event.preventDefault();
   app.querySelector('p').textContent='Hello, '+form.elements.name.value.trim();
});
