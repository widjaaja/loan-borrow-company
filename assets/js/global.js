window.onload = function(){
    // Menu Service Dropdown
    var menuService = document.getElementById("menu-service");
    var appHeader = document.querySelector(".app-header");
    menuService.addEventListener("mouseenter", openMenuService, false);
    appHeader.addEventListener("mouseleave", closeMenuService, false);

    // Menu Mobile Show
    var openNavbar = document.querySelector(".open-navbar");
    var closeNavbar = document.querySelector(".close-navbar");
    openNavbar.addEventListener("click", openMenuMobile, false);
    closeNavbar.addEventListener("click", closeMenuMobile, false);
}

function openMenuService(){  
   const subMenuService = document.querySelector(".sub-menu-service");
   console.log(subMenuService);
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
    console.log(subMenuService);
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
    console.log(contentMenuMobile);
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
    console.log(contentMenuMobile);
    if (contentMenuMobile) {
     let animation = gsap.to(contentMenuMobile, {
         paused: true,
         opacity: 0,
         display: "none",
     });
     animation.play()
    }
 }
