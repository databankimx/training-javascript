const rows=[{month:'Jan',hours:12},{month:'Feb',hours:18},{month:'Mar',hours:9},{month:'Apr',hours:21}];
const app=document.querySelector('#app');
app.innerHTML='<label>Minimum hours <input type="number" min="0" value="0"></label><ul aria-live="polite"></ul>';
const input=app.querySelector('input'),list=app.querySelector('ul');
function render(){
  list.replaceChildren();
  const raw=input.value;
  const min=Number(raw);
  if(!raw.trim()||!Number.isFinite(min)||min<0){
    list.textContent='Enter a nonnegative number';
    return;
  }
  const selected=rows.filter(row=>row.hours>=min);
  if(!selected.length){
    list.textContent='No matching months';
    return;
  }
  for(const row of selected){
    const item=document.createElement('li');
    item.textContent=row.month+': '+row.hours+' hours';
    list.append(item);
  }
}
input.addEventListener('input',render);
render();
