const form=document.querySelector('form'),amount=form.elements.amount,allocation=form.elements.allocation;
function cents(raw){
  if(!/^\d+(?:\.\d{1,2})?$/.test(raw))return null;
  const [whole,fraction='']=raw.split('.');
  const value=Number(whole)*100+Number(fraction.padEnd(2,'0'));
  return Number.isSafeInteger(value)?value:null;
}
function validate(){
  amount.setCustomValidity('');
  allocation.setCustomValidity('');
  const total=cents(amount.value),part=cents(allocation.value);
  if(total===null)amount.setCustomValidity('Enter an amount with at most two decimal places');
  if(part===null)allocation.setCustomValidity('Enter an amount with at most two decimal places');
  else if(total!==null&&part>total)allocation.setCustomValidity('Allocation exceeds invoice total');
}
form.addEventListener('input',validate);
form.addEventListener('submit',event=>{
  event.preventDefault();
  validate();
  if(!form.reportValidity())return;
  document.querySelector('#result').textContent='Unallocated cents: '+(cents(amount.value)-cents(allocation.value));
});
