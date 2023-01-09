// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

//modal CloseFunction
const CloseFunction = () => {
  modal.classList.add('closed');
};

// modal function
modalCloseOverlay.addEventListener('click', CloseFunction);
modalCloseBtn.addEventListener('click', CloseFunction);

/**-------------------------------------------------------------------------------------------------------*/

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-close-btn]');

// notification CloseFunction
const toastCloseFunction = () => {
  notificationToast.classList.add('closed');
};

// notification function
toastCloseBtn.addEventListener('click', toastCloseFunction);
notificationToast.addEventListener('click', toastCloseFunction);

/**--------------------------------------------------------------------------------------------------------*/

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  '[data-mobile-menu-open-btn]',
);
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll(
  '[data-mobile-menu-close-btn]',
);
const overlay = document.querySelector('[data-overlay]');

// mobile menu open function
const menuOpenBtn = () => {
  mobileMenu.forEach((ele) => {
    ele.classList.add('active');
  });
  overlay.classList.add('active');
};

// mobile menu Close function
const menuCloseBtn = () => {
  mobileMenu.forEach((ele) => {
    ele.classList.remove('active');
  });
  overlay.classList.remove('active');
};

mobileMenuOpenBtn.forEach((ele) => {
  // addEventListener to mobile menu btn
  ele.addEventListener('click', menuOpenBtn);
});
mobileMenuCloseBtn.forEach((ele) => {
  // addEventListener to close menu btn
  ele.addEventListener('click', menuCloseBtn);
});

/*=========================================== ACCORDING FUNCTION ================================================== */

// according variables
const accordingBtn = document.querySelectorAll('[data-accordion-btn]');
const according = document.querySelectorAll('[data-accordion]');

// according btn function
accordingBtn.forEach((ele) => {
  // addEventListener to this according
  ele.addEventListener('click', () => {
    const clickedBtn = ele.nextElementSibling.classList.contains('active');

    // for looping for according to remove active class
    according.forEach((accord) => {
      if (clickedBtn) {
        return;
      }
      if (accord.classList.contains('active')) {
        accord.classList.remove('active');
        ele.classList.remove('active');
      }
    });
    ele.classList.toggle('active');
    ele.nextElementSibling.classList.toggle('active');
  });
});

/*=========================================== COUNTDOWN FUNCTION ================================================== */

const countDown = () => {
  // set time and date

  /** use the getTime method to get date by milsecod */
  const countDate = new Date(
    'Dec 31, 2022 23:59:59',
  ).getTime(); /** declare the date as we countDown to it  */

  const now = new Date().getTime(); /** TO GET CUREENT DATE */
  const gap =
    countDate - now; /** TO GET THE DATE BETWEEN NOW AND DATE OF EVENT */

  // how does work
  const second = 1000; /** 1000 milsecond  = 1 second */
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calc this
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMintue = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // add to dom tree
  document.querySelector('[data-days]').innerHTML = textDay;
  document.querySelector('[data-hours]').innerHTML = textHour;
  document.querySelector('[data-min]').innerHTML = textMintue;
  document.querySelector('[data-sec]').innerHTML = textSecond;
};

setInterval(countDown, 1000);

/*=============================================== LAZY LOAD IMAGES =============================================== */
let images = document.querySelectorAll('img');
window.onload = () => {
  for (i = 0; i < images.length; i++) {
    images[i].setAttribute('loading', 'lazy');
  }
};



