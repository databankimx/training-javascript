const data=[{name:'Ada',hours:12},{name:'Grace',hours:4},{name:'Linus',hours:20}];
const search=document.querySelector('#filter'),sort=document.querySelector('#sort'),body=document.querySelector('tbody');
function render(){
  const selected=data.filter(row=>row.name.toLowerCase().includes(search.value.trim().toLowerCase())).toSorted(sort.value==='hours'?(a,b)=>a.hours-b.hours:(a,b)=>a.name.localeCompare(b.name));
  body.replaceChildren();
  for(const record of selected){
    const row=document.createElement('tr');
    for(const value of [record.name,record.hours]){
      const cell=document.createElement('td');
      cell.textContent=String(value);
      row.append(cell);
    }
    body.append(row);
  }
  document.querySelector('#count').textContent=selected.length?selected.length+' matching learners':'No matches';
}
search.addEventListener('input',render);
sort.addEventListener('change',render);
render();
