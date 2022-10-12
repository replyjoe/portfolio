
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

var typed = new Typed('.typed', {
  strings: ['//<b><i>hi !!</i></b> i am a coder dabbling in <b>ui/ux</b>, <b>web design</b> and <b>fine art</b> based in <b>hong kong</b> and <b>london</b>!!<br><br><br>more content coming...<br>more content coming...<br>more content coming...<br><br><b><a href = "mailto: replyjoe@outlook.com">contact me!!</b></a>'],
  // smartBackspace: true // Default value
  typeSpeed: 15,
  showCursor: false,
  autoInsertCss: true,
});
