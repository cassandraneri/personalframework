document.addEventListener('DOMContentLoaded', function () {
// JS SCRIPTS GO HERE
  console.log("what's up cass?");
});

// OVERLAY NAV MENU SHOW HIDE
const mymenubutton = document.querySelector('.menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

mymenubutton.onclick = function() {
// statements go here
    if (mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute('data-navstate', 'closed')
    } else {
        mysitenav.setAttribute('data-navstate', 'open')
    }
};

//  REVEAL ON SCROLL JS
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.setAttribute('data-sectionstate', 'active');
    } else {
      entry.target.setAttribute('data-sectionstate', 'inactive');
    }
  });
});


document.querySelectorAll('.scroll-triggered').forEach((section) => {
  myobserver.observe(section);
});

