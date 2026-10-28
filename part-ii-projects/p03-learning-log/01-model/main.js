const app=document.querySelector('#app');
app.innerHTML='<form><label>Learning entry <input name="entry" required maxlength="200"></label><button>Add</button></form><ul aria-live="polite"></ul>';
const form=app.querySelector('form'),list=app.querySelector('ul');
const entries=[];
function render(){
  list.replaceChildren();
  for(const entry of entries){
    const item=document.createElement('li');
    item.textContent=entry.text;
    list.append(item);
  }
}
form.addEventListener('submit',event=>{
  event.preventDefault();
  const text=form.elements.entry.value.trim();
  if(!text)return;
  entries.push({id:crypto.randomUUID(),text});
  form.reset();
  render();
});
render();
