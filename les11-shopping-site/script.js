const menuActive = document.querySelector('.menu');
const burger = document.querySelector('.menu-open'); 
const menuClose = document.querySelector('.menu-close');

function toggleMenu(){
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);

const productCardsMatrix = JSON.parse(productCardsData);
const productCards = document.querySelector('.productCards');

productCardsMatrix.forEach((item) => {
    productCards.insertAdjacentHTML('beforeend', 
    `
    <div class="productCards-item">
                    <div class="hover">
                        <img src="${item.img}" alt="" class="productCards-img">
                        <div class="img-hover">
                            <button class="hover-buy-btn">
                                <img src="./img/korzine.svg" alt="" class="hover-buy-img">
                                <p class="hover-buy-text">Add to Cart</p>
                            </button>
                        </div>
                        <div class="productCards-item-content">
                            <h4 class="productCards-title">${item.title}</h4>
                            <p class="productCards-text">${item.text}</p>
                            <p class="productCards-price">$${item.price}</p>
                        </div>
                    </div>
                </div>
    `
    )
});