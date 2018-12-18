// function smoothScrollingTo(target) {
//     $('html,body').animate({ scrollTop: $(target).offset().‌​top }, 800);
// }
// $('a[href*=\\#]').on('click', function (event) {
//     event.preventDefault();
//     smoothScrollingTo(this.hash);
// });

// $(document).ready(function () {
//     smoothScrollingTo(location.hash);
//     toggleMenu();
// });


// $('menuToggle').on('click', function () {
//     $('.menuToggle .fas').toggleClass('show-icon');
// });


$(document).ready(function () {


    var typed = new Typed('.typed', {
        strings: ["Front-End Web Developer.", "'Turonno' Native.", "Tech Enthusiast."],
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 500,
        // backspacing speed
        backSpeed: 30,
        // time before backspacing
        backDelay: 800,
        // loop
        loop: true,
        // false = infinite
        loopCount: 20,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null

    });
});


