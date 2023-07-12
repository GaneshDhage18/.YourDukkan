// Copy menu for mobile
function copyMenu() {
  //copy inside .dpt-cat to .departments
  var dptCategory = document.querySelector('.dpt-cat');
  var dptPlace = document.querySelector('.departments');
  dptPlace.innerHTML = dptCategory.innerHTML;

  // copy inside nav to nav
  var mainNav = document.querySelector('.header-nav nav');
  var navPlace = document.querySelector('.off-canvas nav')
  navPlace.innerHTML = mainNav.innerHTML;


  //copy .header-top .wrapper to .thetop-nav
  var topNav = document.querySelector('.header-top .wrapper');
  var topPlace = document.querySelector('.off-canvas .thetop-nav')
  topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();
//Show mobile menu
const menuButton = document.querySelector('.trigger'),
  closeButton = document.querySelector('.t-close'),
  addclass = document.querySelector('.site')
menuButton.addEventListener('click', function () {
  addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function () {
  addclass.classList.remove('showmenu')
})


//Show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
  if (this.closest('.has-child').classList != 'expand');
  this.closest('.has-child').classList.toggle('expand')
}

// Slider
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});


// Show search
const searchButton = document.querySelector('.t-search'),
  tclose = document.querySelector('.search-close'),
  showClass = document.querySelector('.site');

searchButton.addEventListener('click', function () {
  showClass.classList.toggle('showsearch')
})
tclose.addEventListener('click', function () {
  showClass.classList.remove('showsearch')
})



//Login info
window.addEventListener('DOMContentLoaded', function() {
  var isLoggedIn = checkLoginStatus();
  setProductOptionVisibility(isLoggedIn);
});

function checkLoginStatus() {
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");
  console.log("Login status:", isLoggedIn);
  return isLoggedIn === "true";
}

function setProductOptionVisibility(isLoggedIn) {
  var productOption = document.getElementById("product-option");
  if (isLoggedIn) {
    productOption.style.display = "block";
    console.log("Product option is visible.");
  } else {
    productOption.style.display = "none";
    console.log("Product option is hidden.");
  }
}

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin@gmail.com" && password === "admin@#123") {
    sessionStorage.setItem("isLoggedIn", "true");
    console.log("Login successful. Redirecting to index.html...");
    window.location.href = "./home.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }

  return false;
}
