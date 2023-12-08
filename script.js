const swiper = new Swiper('.swiper', {
    effect: "coverflow",
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 0.8,
      },
    loop: true,
    autoplay: {
        delay: 3000, // Tiempo de espera entre cada slide en milisegundos
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
      dynamicBullets: "true",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
  });


const swiper2 = new Swiper('.swiper2', {
    effect: "cards",
    loop: true,
    autoplay: {
        delay: 3000, // Tiempo de espera entre cada slide en milisegundos
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: "true",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});

const nav =  document.querySelector(".mainNav")
let burguer = document.querySelector(".burguer")

burguer.addEventListener("click", ()=> {
    nav.classList.toggle("show")
})

const navAnchors = document.querySelectorAll(".anchor")
console.log(navAnchors)
navAnchors.forEach((anchor)=> {
  anchor.addEventListener("click", ()=> {
    nav.classList.toggle("show")
  })
})