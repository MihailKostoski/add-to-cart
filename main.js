let AllTotal = 0;
function addToCart(element) {
  
  let mainEl = element.closest(".single-item");

  
  let name = mainEl.querySelector("h3").innerText;


  let price = mainEl.querySelector(".price").innerText;


  price = price.substring(1);
  price = parseFloat(price);

  
  let quantity = mainEl.querySelector("input").value;
  quantity = parseFloat(quantity);


  let total = price * quantity;


  let cart = document.querySelector(".cart-items");

  let cartTotal = document.querySelector(".total");

  if (quantity > 0) {
    cart.innerHTML += `<div class='cart-single-item'>
          <h3>${name}</h3>
          <p>$${price} * ${quantity} = $<span >${total}</span></p>
          <button onclick = btnRemove(this)>Remove</button>
      
          </div>`;
 
    for (AllTotal; AllTotal < total; ) {
      AllTotal = AllTotal + total;
      cartTotal.innerText = `$${AllTotal}`;
    }

    element.innerText = "Added";
    element.setAttribute("disabled", true);
    console.log(cart);
  } else {
    alert("add-quantity");
  }
}

function btnRemove(btn) {
  let mainEl = btn.closest(".cart-single-item");
  let price = mainEl.querySelector("p span").innerText;
  let name = mainEl.querySelector("h3").innerText;
  let vegetables = document.querySelectorAll(".single-item");
  price = parseFloat(price);
  console.log(typeof price);
  AllTotal -= price;
  document.querySelector(".total").innerText = `$${AllTotal}`;
  mainEl.remove();
  
  vegetables.forEach((vege) => {
    let itemName = vege.querySelector(".si-content h3").innerText;

    if (itemName === name) {
      vege.querySelector(".actions input").value = 0
      vege.querySelector(".actions button ").innerText = 'Add'
      vege.querySelector(".actions button").removeAttribute("disabled") = 0
   
    

    }
  });
}
