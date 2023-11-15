window.addEventListener('load', function() {
    // List FAQ
    const accordion = document.querySelectorAll('.list-faq .item');

    accordion.forEach((accordionTitle) => {
        accordionTitle.addEventListener("click", (() => {
        if (accordionTitle.classList.contains("active")) {
            accordionTitle.classList.remove("active");
            const contentMenuFAQ = accordionTitle.querySelector('.value');
            let animation = gsap.to(contentMenuFAQ, {
                paused: true,
                opacity: 0,
                display: "none",
            });
            animation.play()
        } else {
            const accordionTitlesWithIsOpen = document.querySelectorAll(".active");
            accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
                accordionTitleWithIsOpen.classList.remove("active");
                const contentMenuFAQ = accordionTitleWithIsOpen.querySelector('.value');
                if (contentMenuFAQ) {
                 let animation = gsap.to(contentMenuFAQ, {
                     paused: true,
                     opacity: 0,
                     display: "none",
                 });
                 animation.play()
                }
            });
            accordionTitle.classList.add("active");
            const contentMenuFAQ = accordionTitle.querySelector('.value');
            if (contentMenuFAQ) {
             let animation = gsap.to(contentMenuFAQ, {
                 paused: true,
                 opacity: 1,
                 display: "flex",
             });
             animation.play()
            }
        }
        }));
    });
});