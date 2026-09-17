"use strict";

// Dark Mode //

const toggleThemeBtn = document.querySelector('#toggle-theme');

toggleThemeBtn.addEventListener('click', () => {
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
});



// Header Cart //

const mainHeader = document.querySelector('.main-header');
const mainHeaderRight = document.querySelector('.main-header .header-right-side')
const mainHeaderLeft = document.querySelector('.main-header .header-left-side')
const bodyOverlay = document.querySelector('.body-overlay');
const mainBody = document.body;

const headerCartBtn = document.querySelector('.header-cart-btn');
const cartBox = document.querySelector('.cart-box');
const closeCartBtn = document.querySelector('.cart-box .close-cart');

function headerCartBtnClick() {
  mainHeader.classList.add('total-cart');
  bodyOverlay.classList.add('active');
  mainBody.classList.add('overflow-hidden');
  setTimeout(() => {
    mainHeaderRight.classList.add('absolute');
    mainHeaderLeft.classList.add('absolute');
    cartBox.classList.remove('absolute');
    cartBox.classList.add('cart-show');
    mainHeader.classList.remove('items-center');
    mainHeader.classList.remove('justify-between');
    mainHeader.classList.add('justify-start');
    mainHeader.classList.add('items-start');
  }, 1000);
}

function closeCartBtnClick() {
  cartBox.classList.remove('cart-show');
  bodyOverlay.classList.remove('active');
  mainHeader.classList.remove('total-cart');
  mainBody.classList.remove('overflow-hidden');
  setTimeout(() => {
    cartBox.classList.add('absolute');
    mainHeaderRight.classList.remove('absolute');
    mainHeaderLeft.classList.remove('absolute');
    mainHeader.classList.remove('justify-start');
    mainHeader.classList.remove('items-start');
    mainHeader.classList.add('items-center');
    mainHeader.classList.add('justify-between');
  }, 300);
}

headerCartBtn.addEventListener('click', headerCartBtnClick);
closeCartBtn.addEventListener('click', closeCartBtnClick);



// Header Login & Sign Up //

const signInBtn = document.querySelector('.sign-in-btn');
const signInBox = document.querySelector('.sign-in-box');
const closeSignInBtn = document.querySelector('.sign-in-box .close-sign-in');

function signInBtnClick() {
  mainHeader.classList.add('account-sign-in');
  bodyOverlay.classList.add('active');
  mainBody.classList.add('overflow-hidden');
  setTimeout(() => {
    mainHeaderRight.classList.add('absolute');
    mainHeaderLeft.classList.add('absolute');
    signInBox.classList.remove('absolute');
    signInBox.classList.add('sign-in-show');
    mainHeader.classList.remove('items-center');
    mainHeader.classList.remove('justify-between');
    mainHeader.classList.add('justify-start');
    mainHeader.classList.add('items-start');
  }, 1000);
}

function closeSignInBtnClick() {
  signInBox.classList.remove('sign-in-show');
  bodyOverlay.classList.remove('active');
  mainHeader.classList.remove('account-sign-in');
  mainBody.classList.remove('overflow-hidden');
  setTimeout(() => {
    signInBox.classList.add('absolute');
    mainHeaderRight.classList.remove('absolute');
    mainHeaderLeft.classList.remove('absolute');
    mainHeader.classList.remove('justify-start');
    mainHeader.classList.remove('items-start');
    mainHeader.classList.add('items-center');
    mainHeader.classList.add('justify-between');
  }, 300);
}

signInBtn.addEventListener('click', signInBtnClick);
closeSignInBtn.addEventListener('click', closeSignInBtnClick);


// Hamburger Menu

const openHamburgerBtn = document.querySelector('.header-hamburger .open-hamburger');
const closeHamburgerBtn = document.querySelector('.header-hamburger .close-hamburger');
const hamburgerMenuList = document.querySelector('.hamburger-menu-list');

function hamburgerMenuOpener() {
  mainHeader.classList.add('hamburger-menu');
  mainHeaderRight.classList.add('self-start');
  openHamburgerBtn.classList.remove('show-icon');
  closeHamburgerBtn.classList.add('show-icon');
  mainBody.classList.add('overflow-hidden');
  setTimeout(() => {
    hamburgerMenuList.classList.remove('absolute');
    hamburgerMenuList.classList.add('menu-show');
  }, 1000);
}

function hamburgerMenuCloser() {
  hamburgerMenuList.classList.remove('menu-show');
  mainHeader.classList.remove('hamburger-menu');
  closeHamburgerBtn.classList.remove('show-icon');
  openHamburgerBtn.classList.add('show-icon');
  hamburgerMenuList.classList.add('absolute');
  mainBody.classList.remove('overflow-hidden');
  setTimeout(() => {
    mainHeaderRight.classList.remove('self-start');
  }, 1000);
}

openHamburgerBtn.addEventListener('click', hamburgerMenuOpener);
closeHamburgerBtn.addEventListener('click', hamburgerMenuCloser);



// Hide Scrolled Header

let windowInnerHeight = innerHeight;
let prevScroll = scrollY;

window.addEventListener('scroll', hideScrolledHeader);
window.addEventListener('resize', () => {
  windowInnerHeight = innerHeight;
});

function hideScrolledHeader() {
  let currentScroll = scrollY;

  if (currentScroll / windowInnerHeight > 0.5 && currentScroll > prevScroll) {
    mainHeader.classList.add('header-scrolled');
  } else {
    mainHeader.classList.remove('header-scrolled');
  }
  prevScroll = currentScroll;
}