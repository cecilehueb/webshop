window.onscroll = function() {stickyStuff()};

let header = document.querySelector(".header");
let darkblue = document.querySelector(".darkblue");
let purple = document.querySelector(".purple");
let footer = document.querySelector(".footer");

let darkbluePos = darkblue.offsetTop;  // calculates darkblue position
let diffHeaderBlue = darkblue.clientHeight - header.clientHeight; //calculates difference in height between the two

let purplePos = purple.offsetTop;

function stickyStuff() {
    // makes sticky header
    if (window.pageYOffset > 50) {
        header.classList.add("header-sticky");
    }

    // removes white space on second scroll to top
    if (window.pageYOffset < 50 && header.classList.contains("header-sticky")) {
        header.classList.remove("header-start");
    }

    // makes sticky blue bar
    if (window.pageYOffset > darkbluePos - header.clientHeight) {
        darkblue.classList.remove("darkblue-start");
        darkblue.classList.add("darkblue-sticky");
        darkblue.style.top = `${header.clientHeight}px`;
    }

    // puts blue bar on top
    if (window.pageYOffset < header.clientHeight + diffHeaderBlue && darkblue.classList.contains("darkblue-sticky")) {
        darkblue.style.top = "0px";
    }

    // put blue bar down again on second scroll
    if (window.pageYOffset > header.clientHeight + diffHeaderBlue && darkblue.classList.contains("darkblue-sticky")) {
        darkblue.style.top = `${header.clientHeight}px`;
    }

     // makes sticky purple bar
     if (window.pageYOffset > purplePos - header.clientHeight - darkblue.clientHeight) {
        purple.classList.remove("purple-start");
        purple.classList.add("purple-sticky");
        purple.style.top = `${header.clientHeight + darkblue.clientHeight}px`;
    }

    // puts purple bar on top
    if (window.pageYOffset < header.clientHeight + darkblue.clientHeight && purple.classList.contains("purple-sticky")) {
        purple.style.top = "0px";
    }

    if ($(document).height()==$(window).scrollTop()+$(window).height()){
        footer.style.position = "sticky";
        footer.style.bottom = "0";
        // show something, load content via ajax etc
    }
        // Here goes your code.
 };

