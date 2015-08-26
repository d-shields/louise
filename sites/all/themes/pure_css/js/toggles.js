(function (window, document) {
var menu = document.getElementById('menu'),
  WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

function toggleHorizontal() {
  [].forEach.call(
    document.getElementById('menu').querySelectorAll('.menu-transform'),
    function(el){
      el.classList.toggle('pure-menu-horizontal');
    }
  );
};

function toggleMenu() {
  toggleHorizontal();
  menu.classList.toggle('open');
  document.getElementById('toggles').classList.toggle('x');
};

function closeMenu() {
  if (menu.classList.contains('open')) {
    toggleMenu();
  }
}

document.getElementById('toggles').addEventListener('click', function (e) {
  toggleMenu();
});

window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(this, this.document);