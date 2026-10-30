const app=document.querySelector('#app');
app.innerHTML='<div id="actions"><button class="remove"><span>Remove this button</span></button></div><button id="add">Add another</button>';
const actions=app.querySelector('#actions');
actions.addEventListener('click', event => {
  const button=event.target instanceof Element ? event.target.closest('button.remove') : null;
  if(!button || !actions.contains(button)) return;
  button.remove();
   console.log('Removed through one delegated listener');
});
app.querySelector('#add').addEventListener('click',()=>{
  const button=document.createElement('button');
  button.className='remove';
  button.textContent='Dynamic button';
  actions.append(button);
});
