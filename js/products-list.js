const products = [
    {
        id: '1',
        name: 'Baby Yoda',
        price: 10,
        image: 'img/baby-yoda.svg',
        description: 'Adorable baby version of the famous Star Wars character, Yoda.'
    },
    {
        id: '2',
        name: 'Banana',
        price: 12,
        image: 'img/banana.svg',
        description: 'A yellow fruit with a curved shape, typically eaten as a snack.'
    },
    {
        id: '3',
        name: 'Girl',
        price: 12,
        image: 'img/girl.svg',
        description: 'Illustration of a girl, representing femininity and youth.'
    },
    {
        id: '4',
        name: 'Viking',
        price: 12,
        image: 'img/viking.svg',
        description: 'Depiction of a Viking warrior, known for their strength and bravery.'
    }
];

products.sort(() => Math.random() - 0.5);

function renderProducts(products) {
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
                Buy ($${product.price})
            </button>
        </div>
    </article>`;
    }
    const productList = document.querySelector('.products__list');
    productList.innerHTML = html;
}

renderProducts(products);

