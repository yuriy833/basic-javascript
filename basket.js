'use strict';

const productName = document.querySelectorAll('.featuredName');
const productPrice = document.querySelectorAll('.featuredPriceValue');
const openBasketBtn = document.querySelector('.cartIconWrap');
const basketEl = document.querySelector('.basket');
const basketCounterEl = document.querySelector('.cartIconWrap span');
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');

openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

let basket = {};

function addProductToObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

function renderProductInBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProductInBasket(productId);
    }
}

function renderNewProductInBasket(productId) {
    let productRow = `
        <div class="basketRow">
            <div>${productName[productId].innerText}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${productPrice[productId].innerText}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${productPrice[productId].innerText}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

// function basketQuantityIncrease() {
//     basketQuantity.textContent++;
// }

function increaseProductCount(productId) {
    const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

function recalculateSumForProduct(productId) {
    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = (basket[productId] * productPrice[productId].innerText).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

function calculateAndRenderTotalBasketSum() {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * productPrice[productId].innerText;
    }
    basketTotalValueEl.textContent = totalSum.toFixed(2);
}

function increaseProductsCount() {
    basketCounterEl.textContent++;
}

function addProductIntoBasket(productId) {
    increaseProductsCount();
    addProductToObject(productId);
    renderProductInBasket(productId);
    calculateAndRenderTotalBasketSum();
}

function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}

function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}

addEventListenersForAddToCartButtons();

// function addToCartListner() {
//     const addToCartButtons = document.querySelectorAll('button[dataProductId]')
//     addToCartButtons.forEach(function (button) {
//         button.addEventListener('click', addedProductHandler);
//     });
// }

// function addedProductHandler(event) {
//     const productId = event.currentTarget.getAttribute('dataProductId');
//     addProductIntoBasket(productId);
// }

// addToCartListner();