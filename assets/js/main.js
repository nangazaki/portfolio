class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, navLinks2) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.navLinks2 = document.querySelectorAll(navLinks2);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    this.navLinks2.forEach((item) => {
      item.addEventListener("click", this.handleClick);
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
  ".nav-list li a"
);
mobileNavbar.init();



const sections = document.querySelectorAll('.js-animation');
const windowMetade = window.innerHeight * 0.6;

function animarScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = (sectionTop - windowMetade) < 0;
    if (isSectionVisible) {
      section.classList.add('js-animated');
    }
  });
}

window.addEventListener('scroll', animarScroll);
