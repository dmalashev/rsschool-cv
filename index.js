const burgerButton = document.querySelector('.burger-menu');
const burgerUpperLine = document.querySelector('.upper-line');
const burgerLowerLine = document.querySelector('.lower-line');
const navigation = document.querySelector('.nav-elements');
const navItems = document.querySelectorAll('.nav-item');

const changeActiveStatus = () => {
  burgerUpperLine.classList.toggle('active');
  burgerLowerLine.classList.toggle('active');
  navigation.classList.toggle('active');
  document.body.classList.toggle('active');
};

burgerButton.addEventListener('click', changeActiveStatus);

for (const navItem of navItems) {
  navItem.addEventListener('click', changeActiveStatus);
}

// console.log(burgerButton);