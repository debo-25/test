let count = 0;
let total = 0;

function addToCart(price) {
  count++;
  total += price;
  document.getElementById("cartCount").innerText = count;
  document.getElementById("totalPrice").innerText = "$" + total;
}

function checkout() {
  alert('تم إتمام الشراء بنجاح! الإجمالي: $' + total);
}

function handleLogin(event) {
  event.preventDefault();
  alert("تم تسجيل الدخول بنجاح!");
  window.location.hash = "";
}

function clearCart() {
  count = 0;
  total = 0;
  document.getElementById('cartCount').innerText = 0;
  document.getElementById('totalPrice').innerText = '$0';
}