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

// THUMBNIAL IMAGES AND LIGHTBOX

const thumbImg = document.querySelector(".thumb__img");
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
      removeOpacity();
      thumbnails[index].style.opacity = "70%";
      e.preventDefault();
    });
  });
}
showActiveThumbnail();
function showActiveThumbnail() {
  removeOpacity();
  thumbnails[0].style.opacity = "70%";
}

function addOpacity() {
  thumbnails.forEach((thumb) => {
    thumb.style.opacity = "70%";
  });
}

function removeOpacity() {
  thumbnails.forEach((thumb) => {
    thumb.style.opacity = "100%";
  });
}

// Chnage Thubnails With Prev And Next Btns
const thumbBtnOne = document.querySelector(".thumb__arrow--one");
const thumbBtnTwo = document.querySelector(".thumb__arrow--two");
slideThumbnails();
function slideThumbnails() {
  thumbBtnTwo.addEventListener("click", (e) => {
    increamentThumbnails();
    e.preventDefault();
  });
  thumbBtnOne.addEventListener("click", (e) => {
    decrease();
    e.preventDefault();
  });
}

// increment for next btn
let currentThumbnail = 0;

function increamentThumbnails() {
  removeOpacity();
  thumbnails[0].style.opacity = "70%";
  currentThumbnail++;
  if (currentThumbnail === 0) {
    thumbMainImg.src = pictures[0];
    removeOpacity();
    thumbnails[0].style.opacity = "70%";
  } else if (currentThumbnail === 1) {
    thumbMainImg.src = pictures[1];
    removeOpacity();
    thumbnails[1].style.opacity = "70%";
  } else if (currentThumbnail === 2) {
    thumbMainImg.src = pictures[2];
    removeOpacity();
    thumbnails[2].style.opacity = "70%";
  } else if (currentThumbnail === 3) {
    thumbMainImg.src = pictures[3];
    removeOpacity();
    thumbnails[3].style.opacity = "70%";
  } else {
    decrease();
  }
}
// decrement for prev btn
function decrease() {
  removeOpacity();
  thumbnails[3].style.opacity = "70%";
  currentThumbnail--;
  if (currentThumbnail === 3) {
    thumbMainImg.src = pictures[3];
    removeOpacity();
    thumbnails[3].style.opacity = "70%";
  } else if (currentThumbnail === 2) {
    thumbMainImg.src = pictures[2];
    removeOpacity();
    thumbnails[2].style.opacity = "70%";
  } else if (currentThumbnail === 1) {
    thumbMainImg.src = pictures[1];
    removeOpacity();
    thumbnails[1].style.opacity = "70%";
  } else if (currentThumbnail === 0) {
    thumbMainImg.src = pictures[0];
    removeOpacity();
    thumbnails[0].style.opacity = "70%";
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
    if (productsNum.textContent <= 0) {
      // removeProducts.disabled = true;
    } else {
      removeProducts.disabled = false;
      productsNum.textContent--;
    }
  });
  productsBtn.addEventListener("click", () => {
    cartItems.textContent = productsNum.textContent;
    numberOfItems.textContent = productsNum.textContent;
    if (productsNum.textContent > 0) {
      addToCart();
    }
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
  emptyCart.classList.add("removeItems");
  addNewItems.classList.add("showItems");
  price = 125 * productsNum.textContent;
  totalPrice.textContent = price;
  productsNum.textContent = 0;
}
// CHECKOUT
checkout();
function checkout() {
  cartCheckoutBtn.addEventListener("click", () => {
    clearCart();
  });
}

// DELETE FROM CART
deleteCartItems();
function deleteCartItems() {
  deleteCartItemsBtn.addEventListener("click", () => {
    clearCart();
  });
}
// CLEAR CART
function clearCart() {
  addNewItems.classList.remove("showItems");
  emptyCart.classList.remove("removeItems");
  setTimeout(() => {
    cartProducts.classList.remove("display");
  }, 2000);
  cartNotification.textContent = 0;
}

// LIGHTBOX FUNCTIONALITIES
const lightbox = document.querySelector(".lightbox");
const lightboxClose = document.querySelector(".lightbox__close--img");
const shadow = document.querySelector(".shadow");

// TOGGLE LIGHT BOX
openAndcloseLightBox();
function openAndcloseLightBox() {
  thumbImg.addEventListener("click", () => {
    if (window.innerWidth >= 800) {
      lightbox.classList.add("light");
      shadow.classList.add("bright");
    }
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("light");
    shadow.classList.remove("bright");
  });
}

const lightboxMainImg = document.querySelector(".lightbox__main--img");
const lightboxes = document.querySelectorAll(".lightboxes");

// Function for changing thumbnails
changeLightboxes();
function changeLightboxes() {
  lightboxes.forEach((img, index) => {
    img.addEventListener("click", (e) => {
      lightboxMainImg.src = pictures[index];
      e.preventDefault();
    });
  });
}

// Chnage lightbox Thumbnails With Prev And Next Btns
const lightboxBtnOne = document.querySelector(".lightbox__arrow--one");
const lightboxBtnTwo = document.querySelector(".lightbox__arrow--two");

lightboxslideThumbnails();
function lightboxslideThumbnails() {
  lightboxBtnTwo.addEventListener("click", (e) => {
    increamentLightbox();
    e.preventDefault();
  });
  lightboxBtnOne.addEventListener("click", (e) => {
    decreaseLightbox();
    e.preventDefault();
  });
}

// increment for next btn
let currentLightbox = 0;

function increamentLightbox() {
  currentLightbox++;
  if (currentLightbox === 0) {
    lightboxMainImg.src = pictures[0];
  } else if (currentLightbox === 1) {
    lightboxMainImg.src = pictures[1];
  } else if (currentLightbox === 2) {
    lightboxMainImg.src = pictures[2];
  } else if (currentLightbox === 3) {
    lightboxMainImg.src = pictures[3];
  } else {
    decreaseLightbox();
  }
}
// decrement for prev btn
function decreaseLightbox() {
  currentLightbox--;
  if (currentLightbox === 3) {
    lightboxMainImg.src = pictures[3];
  } else if (currentLightbox === 2) {
    lightboxMainImg.src = pictures[2];
  } else if (currentLightbox === 1) {
    lightboxMainImg.src = pictures[1];
  } else if (currentLightbox === 0) {
    lightboxMainImg.src = pictures[0];
  } else {
    increamentLightbox();
  }
}
