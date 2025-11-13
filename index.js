const burgerButton = document.querySelector('.burger-menu');
const burgerUpperLine = document.querySelector('.upper-line');
const burgerLowerLine = document.querySelector('.lower-line');
const navigation = document.querySelector('.nav-elements');
const navItems = document.querySelectorAll('.nav-item');

const toggleActiveStatus = () => {
  burgerUpperLine.classList.toggle('active');
  burgerLowerLine.classList.toggle('active');
  navigation.classList.toggle('active');
  document.body.classList.toggle('active');
};

const removeActiveStatus = () => {
  burgerUpperLine.classList.remove('active');
  burgerLowerLine.classList.remove('active');
  navigation.classList.remove('active');
  document.body.classList.remove('active');
};

burgerButton.addEventListener('click', toggleActiveStatus);

for (const navItem of navItems) {
  navItem.addEventListener('click', removeActiveStatus);
}
