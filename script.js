const productContainer = document.getElementById('products');
document.getElementById('year').textContent = new Date().getFullYear();

function productCard(product) {
  const message = encodeURIComponent(`Assalamu Alaikum Broadway Gems, I am interested in ${product.name} (${product.weight}). Please send details and best price.`);
  return `
    <article class="product-card">
      <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
      <div class="product-body">
        <div class="product-top">
          <div>
            <h3>${product.name}</h3>
            <div class="meta">${product.type} · ${product.weight}<br>${product.origin}<br><strong>${product.price}</strong></div>
          </div>
          <span class="status">${product.status}</span>
        </div>
        <p class="meta">${product.description}</p>
        <ul class="highlights">${product.highlights.map(item => `<li>${item}</li>`).join('')}</ul>
        <a class="inquire" href="https://wa.me/94773278596?text=${message}">Inquire on WhatsApp</a>
      </div>
    </article>
  `;
}

fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    productContainer.innerHTML = products.map(productCard).join('');
    if (products[0]?.images?.[0]) document.getElementById('heroImage').src = products[0].images[0];
  })
  .catch(() => {
    productContainer.innerHTML = '<p>Products could not be loaded. Please check data/products.json.</p>';
  });
