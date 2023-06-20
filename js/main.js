"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var wrapper = document.querySelector('.wrapper');
    var currentPage = wrapper.getAttribute('data-page');
  
    if (currentPage === 'main') {
        // every page modules
        import("./every-page/burger.js");//every page burger functions & plugin socials
        import("./every-page/cursor.js");//every page custom cursor
        import("./every-page/btn_disappear.js");//every page script for disappear

        // specific individual modules
        import("./main-page/slider.js");//main page slider top section & ticker for slide words
        import("./main-page/counter.js");//main page counter on loading
        import("./main-page/what-animation.js");//main page animation section what
    } else if (currentPage === 'project-profile') {
        // every page modules
        import("./every-page/burger.js");//every page burger functions & plugin socials
        import("./every-page/cursor.js");//every page custom cursor
        import("./every-page/btn_disappear.js");//every page script for disappear

        // specific individual modules
        import("./project-profile/list-cutter.js");
        import("./project-profile/block_moving.js");
    } else if (currentPage === 'projects') {
        // every page modules
        import("./every-page/burger.js");//every page burger functions & plugin socials
        import("./every-page/cursor.js");//every page custom cursor
        import("./every-page/btn_disappear.js");//every page script for disappear

        // specific individual modules
    } else if (currentPage === '404') {
        // every page modules
        import("./every-page/cursor.js");//every page custom cursor

        // specific individual modules
    } else {
        console.log('Error type unkown page');
        console.log('Instruction:');
        console.log('1. Add a condition to main.js and include modules.');
        console.log('2. Specify in html for wrapper the data-page attribute with the name of the page.');
    }
});
