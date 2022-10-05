// TOGGLE SMALL SCREEN NAV
const openSmallNav = document.querySelector(".smallnav__open");
const closeSmallNav = document.querySelector(".smallnav__close");
const smallNav = document.querySelector(".smallnav");
const overlay = document.querySelector(".overlay");

openAndCloseSmallNav();
function openAndCloseSmallNav() {
  openSmallNav.addEventListener("click", () => {
    smallNav.classList.add("show");
    overlay.classList.add("darken");
    document.body.style.overflow = "hidden";
  });

  closeSmallNav.addEventListener("click", () => {
    smallNav.classList.remove("show");
    overlay.classList.remove("darken");
    document.body.style.overflow = "auto";
  });
}

// THUMBNIAL IMAGES
const thumbImg = document.querySelectorAll(".thumb__img");
const thumbMainImg = document.querySelector(".thumb__main--img");
const thumbnails = document.querySelectorAll(".thumbnails");

let pictures = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

// Function for changing thumbnails
changeThumbnails();
function changeThumbnails() {
  thumbnails.forEach((img, index) => {
    img.addEventListener("click", (e) => {
      thumbMainImg.src = pictures[index];
      e.preventDefault();
    });
  });
}

// Chnage Thubnails With Prev And Next Btns
const thumbBtnOne = document.querySelector(".thumb__arrow--one");
const thumbBtnTwo = document.querySelector(".thumb__arrow--two");
slideThumbnails();
function slideThumbnails() {
  thumbBtnTwo.addEventListener("click", () => {
    increamentThumbnails();
  });
  thumbBtnOne.addEventListener("click", () => {
    decrease();
  });
}

// increment for next btn
let currentThumbnail = 0;
function increamentThumbnails() {
  currentThumbnail++;
  if (currentThumbnail === 0) {
    thumbMainImg.src = pictures[0];
  } else if (currentThumbnail === 1) {
    thumbMainImg.src = pictures[1];
  } else if (currentThumbnail === 2) {
    thumbMainImg.src = pictures[2];
  } else if (currentThumbnail === 3) {
    thumbMainImg.src = pictures[3];
  } else {
    decrease();
  }
}
// decrement for prev btn
function decrease() {
  currentThumbnail--;
  if (currentThumbnail === 3) {
    thumbMainImg.src = pictures[3];
  } else if (currentThumbnail === 2) {
    thumbMainImg.src = pictures[2];
  } else if (currentThumbnail === 1) {
    thumbMainImg.src = pictures[1];
  } else if (currentThumbnail === 0) {
    thumbMainImg.src = pictures[0];
  } else {
    increamentThumbnails();
  }
}

// CART FUNCTIONALITIES

const productsNum = document.getElementById("productsNum");
const addProducts = document.getElementById("addProducts");
const removeProducts = document.getElementById("removeProducts");
const productsBtn = document.querySelector(".products__btn");

// Add And Remove Items From Cart

addAndRemoveFromCart();
function addAndRemoveFromCart() {
  addProducts.addEventListener("click", () => {
    productsNum.textContent++;
  });
  removeProducts.addEventListener("click", () => {
    productsNum.textContent--;
  });
  productsBtn.addEventListener("click", () => {
    cartItems.textContent = productsNum.textContent;
    numberOfItems.textContent = productsNum.textContent;
    addToCart();
  });
}

// TOGGLE CART WHEN CART ICON IS CLICKED AND CHANGE CART STATE
const cartIconBtn = document.querySelector(".cart__design");
const cartProducts = document.querySelector(".cart__products");
const deleteCartItemsBtn = document.querySelector(".delete");
const cartCheckoutBtn = document.querySelector(".cart__btn");
const cartItems = document.querySelector(".cart__items");
const addNewItems = document.getElementById("addedToCart");
const emptyCart = document.getElementById("emptyCart");
const cartNotification = document.querySelector(".cart__items");
const numberOfItems = document.getElementById("number");
const totalPrice = document.getElementById("total");

toggleCart();
function toggleCart() {
  cartIconBtn.addEventListener("click", () => {
    cartProducts.classList.toggle("display");
  });
}

// add items to cart
function addToCart() {
  addNewItems.classList.add("showItems");
  emptyCart.classList.add("removeItems");
  price = 125 * productsNum.textContent;
  totalPrice.textContent = price;
  productsNum.textContent = 0;
}
// CHECKOUT
checkout();
function checkout() {
  cartCheckoutBtn.addEventListener("click", () => {
    cartProducts.innerHTML = `
        <strong class="cart__title">
              Cart
            </strong>
          <p class="empty__cart"> Checkout Successful Your Cart Is Now Empty </p>
       `;
    cartNotification.textContent = 0;
  });
}

// DELETE FROM CART
deleteCartItems();
function deleteCartItems() {
  deleteCartItemsBtn.addEventListener("click", () => {
    cartProducts.innerHTML = `
        <strong class="cart__title">
              Cart
            </strong>
          <p class="empty__cart"> Your Cart Is Empty </p>
        `;
    cartNotification.textContent = 0;
  });
}
