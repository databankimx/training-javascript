const form=document.querySelector('form'),choice=document.querySelector('#payment'),section=document.querySelector('#wire-fields');
function sync(){
  const wire=choice.value==='wire';
  section.hidden=!wire;
  section.disabled=!wire;
}
choice.addEventListener('change',sync);
sync();
form.addEventListener('submit',event=>{
  event.preventDefault();
  document.querySelector('#result').textContent=JSON.stringify(Object.fromEntries(new FormData(form)));
});
