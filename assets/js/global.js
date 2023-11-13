
window.onload = function(){
    // Body
    var containerLayout = document.querySelector(".container-layout");
    window.addEventListener('scroll', () => {    
        console.log("top of element", window.scrollY);
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



