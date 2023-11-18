
window.addEventListener('load', function() {
    // Body
    window.addEventListener('scroll', () => {    
        // console.log("top of element", window.scrollY);
        if (window.scrollY > 200) {
            let animation = gsap.to(".nav-fixed", {
                paused: true,
                opacity: 1,
                display: "flex",
            });
            animation.play()
        }
        if (window.scrollY === 0) {
            let animation = gsap.to(".nav-fixed", {
                paused: true,
                opacity: 0,
                display: "none",
            });
            animation.play()
        }
    }, {passive: true});

    // List Menu
    var logo = document.querySelector(".logo");
    logo.addEventListener("click", (() => redirect('/')), false);
    var applyOnline = document.querySelector(".apply-online");
    applyOnline.addEventListener("click", (() => redirect('/pages/apply-loan.html')), false);

    // Menu Service Dropdown
    var menuService = document.querySelector(".menu-service");
    var appHeader = document.querySelector(".app-header");
    menuService.addEventListener("mouseenter", openMenuService, false);
    appHeader.addEventListener("mouseleave", closeMenuService, false);

    // Menu Mobile Show
    var openNavbar = document.querySelector(".open-navbar");
    var closeNavbar = document.querySelector(".close-navbar");
    openNavbar.addEventListener("click", openMenuMobile, false);
    closeNavbar.addEventListener("click", closeMenuMobile, false);
    
    // Accordion
    var accordionTitle = document.querySelectorAll(".accordion-title");
    accordionTitle.forEach((item) => {
        item.addEventListener("click", function () {
            let accordionContent = this.children[1].children[1];
            toggleAccordion(accordionContent);
        });
    });

    // Carousel
    var carouselElement = document.querySelectorAll(".carousel");
    var nextActive = 1;
    var buttonNext = document.querySelector(".btn-next");
    var buttonPrev = document.querySelector(".btn-prev");
    buttonNext.addEventListener("click", function () {
        carouselElement.forEach((item, idx) => {
            if (idx !== nextActive ) {
                gsap.to(item, {
                    duration: 0.5,
                    opacity: 0,
                    display: "none",
                });
            }
        });
        gsap.to(carouselElement[nextActive], {
            duration: 0.5,
            opacity: 1,
            display: "flex",
        });
        nextActive++;
        if (nextActive === carouselElement.length) {
            nextActive = 0;
        }
    });

    buttonPrev.addEventListener("click", function () {
        carouselElement.forEach((item, idx) => {
            if (idx !== nextActive ) {
                gsap.to(item, {
                    duration: 0.5,
                    opacity: 0,
                    display: "none",
                });
            }
        });
        gsap.to(carouselElement[nextActive], {
            duration: 0.5,
            opacity: 1,
            display: "flex",
        });
        nextActive--;
        if (nextActive < 0) {
            nextActive = carouselElement.length - 1;
        }
    });
});

function toggleAccordion(element){
    if(!element) {
        return;
    }
    let buttonPlus = element.parentElement.previousElementSibling;
    let imageElemet = element.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
    if(element.style.height === "0px") {
        buttonPlus.innerHTML = `<i class="fa-solid fa-minus"></i>`;
       gsap.to(imageElemet, {
            duration: 0.2,
            height:  (imageElemet.scrollHeight+element.scrollHeight) + "px",
       });
        gsap.to(element, {
            duration: 0.2,
            opacity:  1 ,
            height:  "auto",
        });
    } else {
        buttonPlus.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        gsap.to(imageElemet, {
            duration: 0.2,
            height:  (imageElemet.scrollHeight-element.scrollHeight) + "px",
        });
        gsap.to(element, {
            duration: 0.2,
            opacity:  0 ,
            height:  "0px",
        });
    }
}

function redirect(url){ 
    window.location.href = url;
}

function openMenuService(){  
   const subMenuService = document.querySelector(".sub-menu-service");
   if (subMenuService) {
    let animation = gsap.to(subMenuService, {
        paused: true,
        opacity: 1,
        display: "flex",
    });
    animation.play()
   }
}

function closeMenuService(){ 
    const subMenuService = document.querySelector(".sub-menu-service");
    if (subMenuService) {
     let animation = gsap.to(subMenuService, {
         paused: true,
         opacity: 0,
         display: "none",
     });
     animation.play()
    }
 }

 function openMenuMobile(){  
    const contentMenuMobile = document.querySelector(".content-mobile");
    if (contentMenuMobile) {
     let animation = gsap.to(contentMenuMobile, {
         paused: true,
         opacity: 1,
         display: "flex",
     });
     animation.play()
    }
 }

 function closeMenuMobile(){  
    const contentMenuMobile = document.querySelector(".content-mobile");
    if (contentMenuMobile) {
     let animation = gsap.to(contentMenuMobile, {
         paused: true,
         opacity: 0,
         display: "none",
     });
     animation.play()
    }
 }
