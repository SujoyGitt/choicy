document.querySelector(".bargar-menu").addEventListener("click", () => {
  console.log("clicked");
  document.querySelector(".side-menu").classList.add("side-menu-active");
});
document.querySelector(".close").addEventListener("click", () => {
  console.log("clicked");
  document.querySelector(".side-menu").classList.remove("side-menu-active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    document.querySelector(".scroll-top").style.opacity = "1";
  } else {
    document.querySelector(".scroll-top").style.opacity = "0";
  }
});

// get started carousel
var swiper = new Swiper(".get-started .mySwiper", {
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
});

//  project carousel start here
var swiper = new Swiper(".success-project .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.25,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// testimonial carousel start here

var swiper = new Swiper(".testimonial .mySwiper", {
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
});

// scroll trigger start here
if (window.innerWidth > 992) {
  let reveal = document.querySelectorAll("section");

  reveal.forEach((el) => {
    let headings = el.querySelectorAll("section");
    let btn = el.querySelectorAll("h1,h2,h3,h4,h5,ul,p,a,i");

    let tl = gsap
      .timeline()
      .from(headings, {
        y: 80,
        stagger: 0.05,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        btn,
        { y: 80, opacity: 0, duration: 1.3, ease: "power3.out" },
        "-=0.6"
      );

    ScrollTrigger.create({
      trigger: el,
      start: "center 130%",
      end: "top 50%",
      markers: false,
      toggleActions: "play none none reverse ",
      animation: tl,
    });


  });
} else {
  console.log("stopped scroll trigger");
}
