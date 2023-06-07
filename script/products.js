const products = [
  {
    id: 1,
    Image:
      "https://i.postimg.cc/Y2LSPgb2/ervo-rocks-Zam8-Tv-Eg-N5o-unsplash1.jpg",
    name: "Air Pods Max",
    price: "1000",
    quantity: 5,
  },
  {
    id: 2,
    Image:
      "https://i.postimg.cc/nrqph4Pv/jason-leung-x-R4-JHzr69-Og-unsplash1.jpg",
    name: "Beats by Dr Dre",
    price: "600",
    quantity: 5,
  },
  {
    id: 3,
    Image: "https://i.postimg.cc/9XJRhr42/c-d-x-PDX-a-82obo-unsplash.jpg",
    name: "Air Pods Max",
    price: "1000",
    quantity: 5,
  },
  {
    id: 4,
    Image:
      "https://i.postimg.cc/7L3fhNVC/luke-peterson-l-UMj2-Zv5-HUE-unsplash.jpg",
    name: "Beats by Dr Dre",
    price: "600",
    quantity: 5,
  },
  {
    id: 5,
    Image:
      "https://i.postimg.cc/q7QrtBw5/dmitry-chernyshov-m-P7a-PSUm7a-E-unsplash1.jpg",
    name: `MacBook Pro`,
    price: `1200`,
    quantity: 5,
  },
  {
    id: 6,
    Image:
      "https://i.postimg.cc/d1L0wTFB/jan-vlacuha-7c-SLfi5m-WOA-unsplash1.jpg",
    name: `MacBook Air`,
    price: `700`,
    quantity: 5,
  },
  {
    id: 7,
    Image:
      "https://i.postimg.cc/YSFt8Nyp/dell-2-L-0vn-Cnzc-U-unsplash.jpg",
    name: `MacBook Pro`,
    price: `1200`,
    quantity: 5,
  },
  {
    id: 8,
    Image:
      "https://i.postimg.cc/zvgMYpKB/dell-8pb7-Hq539-Zw-unsplash.jpg",
    name: `MacBook Air`,
    price: `700`,
    quantity: 5,
  },
  {
    id: 9,
    Image: "https://i.postimg.cc/ZK0W42bm/v-a-tao-Oxvl-DO8-Rw-Kg-unsplash.jpg",
    name: `iPhone 11`,
    price: `500`,
    quantity: 5,
  },
  {
    id: 10,
    Image:
      "https://i.postimg.cc/Kz6mbqJG/thom-bradley-1-NZcjdo2h-KQ-unsplash1.jpg",
    name: `iPhone 11 Pro`,
    price: `800`,
    quantity: 5,
  },
  {
    id: 11,
    Image: "https://i.postimg.cc/zv2f4zw5/d-c-tr-nh-NEv65-ZXju-Lg-unsplash.jpg",
    name: `iPhone 11`,
    price: `500`,
    quantity: 5,
  },
  {
    id: 12,
    Image:
      "https://i.postimg.cc/RZB08DKW/hendrik-morkel-SAX8x-Hr-KJME-unsplash.jpg",
    name: `iPhone 11 Pro`,
    price: `800`,
    quantity: 5,
  },
  {
    id: 13,
    Image: "https://i.postimg.cc/g2wRK5V1/mika-baumeister-c-QTl-Lkl2-Fnw-unsplash.jpg",
    name: `iPhone 11`,
    price: `500`,
    quantity: 5,
  },
  {
    id: 14,
    Image:
           "https://i.postimg.cc/9QFwffFd/screen-post-JF0-R2s-MFb-JU-unsplash.jpg",
    name: `iPhone 11 Pro`,
    price: `800`,
    quantity: 5,
  },{
    id: 15,
    Image: "https://i.postimg.cc/2jLS2Z39/screen-post-v-Yxnwamt6-HE-unsplash.jpg",
    name: `iPhone 11`,
    price: `500`,
    quantity: 5,
  },
  {
    id: 16,
    Image:
      "https://i.postimg.cc/vHWq70yY/studio-proper-CWWa6f1-EB5g-unsplash.jpg",
    name: `iPhone 11 Pro`,
    price: `800`,
    quantity: 5,
  },
];

function displayProducts() {
  const ourProducts = document.getElementById("products");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
        <img src="${product.Image}" alt="${product.name}" id="product-imgs">
        <h3>${product.name}</h3>
        <p>${product.price}</p>        
        <button onclick="addToCart(${product.id})" class="addbtn">Add to cart</button>`;
    ourProducts.appendChild(productElement);
  });
}

let cart = JSON.parse(localStorage.getItem("Products")) || [];

function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product && product.quantity > 0) {
    cart.push(product);
    product.quantity--;
    updateCart();
  }
}

function removeFromCart(index) {
  let removedProduct = cart.splice(index, 1)[0];
  removedProduct.quantity++;
  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById("cart-body");
  localStorage.setItem("Products", JSON.stringify(cart));
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
        <span>${product.name}</span>
        <span>${product.price}</span>
        <input type="number" placeholder="1" min="1" width="50px" height="40px">
        <p>Total $ ${product.price}</p>
        <button onclick="removeFromCart(${index})" class="rembutton">✖</button>
      `;
    cartContainer.appendChild(cartItem);
  });
  calculateTotal();
}

function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0;
  cart.forEach((item) => {
    total += eval(item.price);
  });
  // let total = cart.reduce((accumulate, product) => {
  //   let price = Number(product.price.replace("$", ""));
  //   return accumulate = price * quantity;
  // }, 0);
  totalElement.textContent = `$${total}`;
}

displayProducts();

updateCart();
