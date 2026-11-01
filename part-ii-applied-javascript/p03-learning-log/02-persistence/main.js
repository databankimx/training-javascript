const app=document.querySelector('#app');
app.innerHTML='<form><label>Learning entry <input name="entry" required maxlength="200"></label><button>Add</button></form><ul aria-live="polite"></ul>';
const form=app.querySelector('form'),list=app.querySelector('ul');
let entries=[];
const exportButton=document.createElement('button');
exportButton.textContent='Export JSON';
const importInput=document.createElement('input');
importInput.type='file';
importInput.accept='.json';
importInput.setAttribute('aria-label','Import entries JSON');
app.append(exportButton,importInput);
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
exportButton.onclick=()=>{
  const url=URL.createObjectURL(new Blob([JSON.stringify(entries,null,2)],{type:'application/json'}));
  const a=document.createElement('a');
  a.href=url;
  a.download='learning-log.json';
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
};
importInput.onchange=async()=>{
  try{
    const file=importInput.files[0];
    if(!file)return;
    if(file.size>100000)throw new Error('File too large');
    const data=JSON.parse(await file.text());
    if(!Array.isArray(data)||!data.every(e=>e&&typeof e.id==='string'&&typeof e.text==='string'&&e.text.trim()&&e.text.length<=200)||new Set(data.map(e=>e.id)).size!==data.length)throw new Error('Invalid entries');
    entries=data;
    render();
    console.log('Imported',entries.length);
  }catch(error){
    console.error(error.message);
  }
};
render();
