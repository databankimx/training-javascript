const dialog=document.querySelector('dialog'),open=document.querySelector('#open'),form=dialog.querySelector('form');
open.addEventListener('click',()=>{
  form.reset();
  dialog.returnValue='';
  dialog.showModal();
});
dialog.addEventListener('close',()=>{
  if(dialog.returnValue==='save'){
    const text=form.elements.note.value.trim();
    if(text){
      const item=document.createElement('li');
      item.textContent=text;
      document.querySelector('#notes').append(item);
    }
  }
  open.focus();
});
