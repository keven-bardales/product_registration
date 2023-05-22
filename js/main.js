const productForm = document.getElementById('product-form');
const productTable = document
  .getElementById('product-table')
  .getElementsByTagName('tbody')[0];

productForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const sku = document.getElementById('sku').value;
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const photo = document.getElementById('photo').value;
  const description = document.getElementById('description').value;

  // Create new product object
  const product = {
    sku,
    name,
    price,
    photo,
    description,
  };

  let products = JSON.parse(localStorage.getItem('products')) || [];

  products.push(product);

  localStorage.setItem('products', JSON.stringify(products));

  addProductToTable(product);

  productForm.reset();
});

productForm
  .querySelector('input[type="reset"]')
  .addEventListener('click', function (event) {
    event.preventDefault();

    productForm.reset();
  });

function loadProducts() {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  products.forEach(function (product) {
    addProductToTable(product);
  });
}

function addProductToTable(product) {
  const row = productTable.insertRow();

  const skuCell = row.insertCell();
  skuCell.textContent = product.sku;

  const nameCell = row.insertCell();
  nameCell.textContent = product.name;

  const priceCell = row.insertCell();
  priceCell.textContent = product.price;

  const photoCell = row.insertCell();
  const img = document.createElement('img');
  img.src = product.photo;
  img.alt = product.name;
  photoCell.appendChild(img);

  const descriptionCell = row.insertCell();
  descriptionCell.textContent = product.description;
}

window.addEventListener('load', loadProducts);
