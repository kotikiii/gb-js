const menuActive = document.querySelector(".menu");
const burger = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

function toggleMenu() {
  menuActive.classList.toggle("hidden");
}

burger.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);

const productCardsMatrix = JSON.parse(productCardsData);
const productCards = document.querySelector(".productCards");

productCardsMatrix.forEach((item) => {
  productCards.insertAdjacentHTML(
    "beforeend",
    `
    <div class="productCards-item" id="${item.id}">
                    <div class="hover">
                        <img src="${item.img}" alt="" class="productCards-img">
                        <div class="img-hover">
                            <button class="hover-buy-btn">
                                <img src="./img/korzine.svg" alt="" class="hover-buy-img">
                                <p class="hover-buy-text">Add to Cart</p>
                            </button>
                        </div>
                    </div>
                        <div class="productCards-item-content">
                            <h4 class="productCards-title">${item.title}</h4>
                            <p class="productCards-text">${item.text}</p>
                            <p class="productCards-price">$${item.price}</p>
                            </div>
                            </div>
                            `
                            );
                        });
                        
const deleteCardBtns = document.querySelectorAll('.card__delete');
const selectedCardsContainer = document.querySelector(".selectedCards");
const selectedCards = document.querySelector(".selected-carts");
productCards.addEventListener("click", function (e) {
  if (e.target.classList.contains("hover-buy-btn")) {
    selectedCards.classList.remove('hide')
    let clickedCard = e.target.parentElement.parentElement.parentElement;
    let title = clickedCard.querySelector(".productCards-title").innerText;
    let img = clickedCard.querySelector(".productCards-img").src;
    let price = clickedCard.querySelector(".productCards-price").innerText;
    selectedCardsContainer.insertAdjacentHTML(
      "beforeend",
      `
            <div class="card">
                    <img src="${img}" alt="${title}" />
                    <div class="card__description">
                        <h2 class="card__title">${title}</h2>
                        <div class="card__data">
                            <p class="card__text">Price: <span class="card__text--red">${price}</span></p>
                            <p class="card__text">Color: <span class="card__text--grey">grey</span></p>
                            <p class="card__text">Size: <span class="card__text--grey">XL</span></p>
                            <p class="card__text">Quantity: <input class="card__input" type="number" max="9" value="1" /></p>
                        </div>
                    </div>
                    <button class="card__delete">
                        <svg class="card__delete-svg" width="18" height="18" fill="none">
                            <path
                                fill="#575757"
                                d="m11.245 9 6.285-6.285a1.59 1.59 0 0 0-2.245-2.25L9 6.752 2.715.466a1.59 1.59 0 0 0-2.25 2.25L6.752 9 .466 15.285a1.59 1.59 0 0 0 2.25 2.25L9 11.248l6.285 6.285a1.591 1.591 0 0 0 2.25-2.25L11.244 9Z"
                            />
                        </svg>
                    </button>
                </div>
            `
    );
  }
});
// for (let i = 0; i < deleteCardBtns.length; i++) {
//       const btn = deleteCardBtns[i];
//       btn.addEventListener('click', (e)=>{
//           console.log(e.target.parentElement)
//       })
//   }
selectedCards.addEventListener("click",  (e) => {
    let isBtn = e.target;
    if(isBtn.classList.contains("card__delete")){
        isBtn.parentElement.remove();
        //console.log(isBtn.parentElement)
    } else if(isBtn.classList.contains("card__delete-svg")){
        isBtn.parentElement.parentElement.remove()
    }
})