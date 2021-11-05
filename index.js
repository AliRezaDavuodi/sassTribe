const darkBtn = document.querySelector('.darkmode');
let darkMode = localStorage.getItem('darkmode');

const activeDarkMode = () => {
  document.documentElement.classList.add('dark');
  document
    .querySelectorAll('img')
    .forEach((img) => img.classList.add('nodark'));
  localStorage.setItem('darkmode', 'active');
};

const deactiveDarkMode = () => {
  document.documentElement.classList.remove('dark');
  document
    .querySelectorAll('img')
    .forEach((img) => img.classList.remove('nodark'));
  localStorage.setItem('darkmode', 'deactive');
};

darkMode === 'active' ? activeDarkMode() : null;

darkBtn.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkmode');
  if (darkMode === 'active') {
    deactiveDarkMode();
  } else {
    activeDarkMode();
  }
});

// set animation for btn dark mode
setInterval(() => {
  darkBtn.classList.toggle('animatedBtn');
}, 3000);
