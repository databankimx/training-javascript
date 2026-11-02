const html = '<ul><li class="product" data-price="12">Notebook</li><li class="product" data-price="4">Pen</li></ul>';
const doc = new DOMParser().parseFromString(html,'text/html');
const products = [...doc.querySelectorAll('.product')].map(node => ({name:node.textContent.trim(), price:Number(node.dataset.price)}));
document.querySelector('#app').textContent = JSON.stringify(products, null, 2);
console.log(products);
