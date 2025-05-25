function toggleMenu() {
  const drawer = document.getElementById('drawer');
  drawer.style.display = (drawer.style.display === 'block') ? 'none' : 'block';
}
function toggleMenu() {
  const drawer = document.getElementById('drawer');
  if (drawer.style.display === 'block') {
    drawer.style.display = 'none';
  } else {
    drawer.style.display = 'block';
  }
}
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}
