const app=document.querySelector('#app');
app.innerHTML='<form><label>Learning entry <input name="entry" required maxlength="200"></label><button>Add</button></form><ul aria-live="polite"></ul>';
const form=app.querySelector('form'),list=app.querySelector('ul');
let entries=[];
function render(){
  list.replaceChildren();
  if(!entries.length){
    list.textContent='No learning entries yet.';
    return;
  }
  for(const entry of entries){
    const item=document.createElement('li');
    const text=document.createElement('span');
    text.textContent=entry.text;
    const remove=document.createElement('button');
    remove.textContent='Delete';
    remove.setAttribute('aria-label','Delete '+entry.text);
    remove.onclick=()=>{
      entries=entries.filter(e=>e.id!==entry.id);
      render();
    };
    item.append(text,remove);
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
