const body=document.querySelector('#rows'),total=document.querySelector('#total');
let nextId=1;
function sum(){
  let cents=0,valid=true;
  for(const input of body.querySelectorAll('input[data-amount]')){
    const raw=input.value;
    if(!/^\d+(?:\.\d{1,2})?$/.test(raw)){
      valid=false;
      continue;
    }
    const [whole,fraction='']=raw.split('.');
    const value=Number(whole)*100+Number(fraction.padEnd(2,'0'));
    if(!Number.isSafeInteger(value)||!Number.isSafeInteger(cents+value)){
      valid=false;
      continue;
    }
    cents+=value;
  }
  total.textContent=valid?'Total: '+new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(cents/100):'Enter valid amounts in every row';
}
function add(){
  if(body.rows.length>=10)return;
  const id=nextId++;
  const row=document.createElement('tr');
  row.dataset.id=String(id);
  row.innerHTML='<td><input aria-label="Description row '+id+'" name="description-'+id+'"></td><td><input data-amount inputmode="decimal" aria-label="Amount row '+id+'" name="amount-'+id+'" value="0.00"></td><td><button type="button" data-remove>Remove</button></td>';
  body.append(row);
  row.querySelector('input').focus();
  sum();
}
document.querySelector('#add').addEventListener('click',add);
body.addEventListener('input',sum);
body.addEventListener('click',event=>{
  const button=event.target instanceof Element?event.target.closest('[data-remove]'):null;
  if(!button||!body.contains(button))return;
  button.closest('tr').remove();
  document.querySelector('#add').focus();
  sum();
});
add();
