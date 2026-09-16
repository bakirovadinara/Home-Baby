document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Add-to-cart interaction (front-end only, no backend)
let cartCount = 0;
const cartCountEl = document.getElementById('cart-count');
const cartBtn = document.querySelector('.cart-btn');

document.querySelectorAll('.add-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    cartCount += 1;
    if (cartCountEl) cartCountEl.textContent = String(cartCount);
    if (cartBtn) cartBtn.setAttribute('aria-label', `Корзина, товаров: ${cartCount}`);
    btn.classList.add('added');
    setTimeout(() => btn.classList.remove('added'), 300);
  });
});

// Wishlist toggle
document.querySelectorAll('.wish-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});

// Newsletter subscribe (front-end only placeholder)
function handleSubscribe(event) {
  event.preventDefault();
  const input = document.getElementById('subscribe-email');
  const button = event.target.querySelector('button');
  if (!input || !input.value) return false;
  const originalText = button.textContent;
  button.textContent = 'Спасибо!';
  input.value = '';
  setTimeout(() => { button.textContent = originalText; }, 2500);
  return false;
}
