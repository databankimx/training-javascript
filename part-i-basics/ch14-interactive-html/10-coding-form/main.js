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
const invoice=document.querySelector('#invoice'),review=document.querySelector('#review');
review.addEventListener('click',()=>{
  const raw=invoice.value;
  const amounts=[...body.querySelectorAll('[data-amount]')].map(input=>input.value);
  function parse(value){
    if(!/^\d+(?:\.\d{1,2})?$/.test(value))throw new Error('Use amounts with at most two decimals');
    const [whole,fraction='']=value.split('.');
    const n=Number(whole)*100+Number(fraction.padEnd(2,'0'));
    if(!Number.isSafeInteger(n))throw new Error('Amount too large');
    return n;
  }
  try{
    if(!amounts.length)throw new Error('Add at least one coding row');
    const expected=parse(raw),actual=amounts.map(parse).reduce((a,b)=>a+b,0);
    if(!Number.isSafeInteger(actual))throw new Error('Total too large');
    if(expected!==actual)throw new Error('Allocations must equal the invoice total');
    document.querySelector('#review-result').textContent='Ready for review (local demo only)';
  }catch(error){
    document.querySelector('#review-result').textContent=error.message;
  }
});
