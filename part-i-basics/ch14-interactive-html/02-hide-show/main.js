const toggle=document.querySelector('#toggle');
const panel=document.querySelector('#details');
function setOpen(open){
  panel.hidden=!open;
  toggle.setAttribute('aria-expanded',String(open));
  toggle.textContent=open?'Hide details':'Show details';
}
toggle.addEventListener('click',()=>setOpen(panel.hidden));
setOpen(false);
