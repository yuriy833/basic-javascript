"use strict";

const products = [{ id: 3, price: 127, photos: ["1.jpg", "2.jpg",] }, { id: 5, price: 499, photos: [] }, {
    id: 10, price: 26, photos: ["3.jpg"]
}, { id: 8, price: 78, },];
let photos = products.filter(function (product) {
    return product.photos && product.photos.length > 3;
});
console.log(photos);

products.sort(function (product1, product2) {
    if (product1.price > product2.price) {
        return 1;
    }
    if (product1.price < product2.price) {
        return -1;
    }
    return 0;
});
console.log(products);
