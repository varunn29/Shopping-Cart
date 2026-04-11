let buttons = document.querySelectorAll("button");
let cartButton = document.getElementById("cart");
let overlay = document.getElementById("overlay");
let cart = document.getElementById("cart-container");
let itemContainer = document.getElementById("items");

let totalItems = document.getElementById("total-items");
let subtotal = document.getElementById("subtotal");
let taxes = document.getElementById("taxes");
let total = document.getElementById("total");

let arr = [
  { name: "Cheese Burger", price: 12.99 },
  { name: "Bacon Burger", price: 3.99 },
  { name: "Chicken Burger", price: 3.99 },
  { name: "Veggie Burger", price: 5.99 },
  { name: "Aloo Tikki Burger", price: 10.99 },
  { name: "Paneer Burger", price: 2.99 },
  { name: "Mushroom Burger", price: 9.99 },
  { name: "Bean Burger", price: 4.99 },
  { name: "Lentil Burger", price: 2.99 },
];

let arrCount = [];
for (let i = 0; i < arr.length; i++) {
  arrCount.push(0);
}

cartButton.addEventListener("click", function () {
  overlay.style.display = "block";
  cart.style.display = "block";
});

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
  cart.style.display = "none";
});

let count = 0;
let amount = 0;
let tax = 0;
let totalAmount = 0;

buttons.forEach(function (btn) {
  let index;
  btn.addEventListener("click", function (event) {
    let clickedButton = event.target;

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === clickedButton) {
        index = i;
      }
    }

    arrCount[index]++;

    count = count + 1;
    amount = amount + arr[index].price;
    tax = tax + 0.05 * arr[index].price;
    totalAmount = amount + tax;

    itemContainer.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
      if (arrCount[i] > 0) {
        let item = document.createElement("p");
        item.textContent = `${arrCount[i]} x ${arr[i].name} = $${(arr[i].price * arrCount[i]).toFixed(2)}`;
        itemContainer.appendChild(item);
      }
    }

    totalItems.textContent = `Total number of items: ${count}`;
    subtotal.textContent = `Subtotal: ${amount}`;
    taxes.textContent = `Taxes: ${tax.toFixed(2)}`;
    total.textContent = `Total: ${totalAmount.toFixed(2)}`;
  });
});
