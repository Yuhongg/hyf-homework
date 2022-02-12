console.log("Script loaded");

const products = getAvailableProducts();
function renderProducts(products) {
  const unorderedList = document.querySelector("ul");
  for (let i = 0; i < products.length; i++) {
    const listElement = document.createElement("li");
    const productTitle = document.createElement("h2");
    const productPrice = document.createElement("p");
    const productRating = document.createElement("p");

    productTitle.innerText = products[i].name;
    listElement.appendChild(productTitle);
    productPrice.innerText = `price: ${products[i].price}`;
    listElement.appendChild(productPrice);
    productRating.innerText = `rating: ${products[i].rating}`;
    listElement.appendChild(productRating);

    unorderedList.appendChild(listElement);
  }
}

console.log(products);
