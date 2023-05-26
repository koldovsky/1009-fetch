const response = await fetch('api/products.json');
const products = await response.json();
renderProducts(products, 1);

// fetch('api/products.json')
//     .then( response => response.json()  )
//     .then( products => renderProducts(products ))

// products.sort(() => Math.random() - 0.5);

function renderProducts(products, rate) {
    let html = '';
    for (const product of products) {
        html += `<article class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3 class="product-card__h3">${product.name}</h3>
        <p class="product-card__description">${product.description}
        </p>
        <div class="product-card__buttons">
            <button class="product-card__buttons-info button button-card">
                Info
            </button>
            <button class="product-card__buttons-buy button button-card">
                Buy (${(product.price * rate).toFixed(2)})
            </button>
        </div>
    </article>`;
    }
    const productList = document.querySelector('.products__list');
    productList.innerHTML = html;
}

document.querySelector('.products__currency').addEventListener('change', convertCurrency);

let currencies;
async function convertCurrency(ev) {
    if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
    }
    const convertTo = ev.target.value;
    const rate = currencies.rates[convertTo];
    renderProducts(products, rate);
}


