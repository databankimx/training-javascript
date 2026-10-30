function init() {
  document.querySelector('#app').textContent = 'DOM is ready for initialization.';
  console.log('init at readyState:', document.readyState);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, {once:true});
}else {
  init();
}
window.addEventListener('load', () => console.log('Page resources loaded'), {once:true});
