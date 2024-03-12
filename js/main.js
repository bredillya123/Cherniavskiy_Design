"use strict";

document.addEventListener('DOMContentLoaded', async function() {
    var wrapper = document.querySelector('.wrapper');
    var currentPage = wrapper.getAttribute('data-page');
  
    if (currentPage === 'main') {
        // every page modules
        await import("./every-page/burger.js");//every page burger functions & plugin socials
        await import("./every-page/cursor.js");//every page custom cursor
        await import("./every-page/btn_disappear.js");//every page script for disappear
        await import("./every-page/form.js");//every page scripy for contact form

        // specific individual modules
        await import("./main-page/slider.js");//main page slider top section & ticker for slide words
        await import("./main-page/counter.js");//main page counter on loading
        await import("./main-page/what-animation.js");//main page animation section what
        await import("./main-page/modal.js");//main page modal window
    } else if (currentPage === 'project-profile') {
        // every page modules
        await import("./every-page/burger.js");//every page burger functions & plugin socials
        await import("./every-page/cursor.js");//every page custom cursor
        await import("./every-page/btn_disappear.js");//every page script for disappear
        await import("./every-page/form.js");//every page scripy for contact form

        // specific individual modules
        await import("./project-profile/list-cutter.js");
        await import("./project-profile/block_moving.js");
        await import("./project-profile/swiper.js");
    } else if (currentPage === 'projects') {
        // every page modules
        await import("./every-page/burger.js");//every page burger functions & plugin socials
        await import("./every-page/cursor.js");//every page custom cursor
        await import("./every-page/btn_disappear.js");//every page script for disappear
        await import("./every-page/form.js");//every page scripy for contact form

        // specific individual modules
    } else if (currentPage === '404') {
        // every page modules
        await import("./every-page/cursor.js");//every page custom cursor

        // specific individual modules
    } else {
        console.log('Error type unkown page');
        console.log('Instruction:');
        console.log('1. Add a condition to main.js and include modules.');
        console.log('2. Specify in html for wrapper the data-page attribute with the name of the page.');
    }
});
