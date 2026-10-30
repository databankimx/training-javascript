const template=document.querySelector('#row-template'),container=document.querySelector('#entries');
let nextId=1;
document.querySelector('#add').addEventListener('click',()=>{
  const fragment=template.content.cloneNode(true);
  const id='note-'+nextId++;
  fragment.querySelector('input').id=id;
  fragment.querySelector('input').name=id;
  fragment.querySelector('label').htmlFor=id;
  container.append(fragment);
});
container.addEventListener('click',event=>{
  const remove=event.target instanceof Element?event.target.closest('[data-remove]'):null;
  if(remove&&container.contains(remove)){
    remove.closest('.entry').remove();
    document.querySelector('#add').focus();
  }
});
