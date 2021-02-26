let photo1 = document.getElementById("photo1");
let photo2 = document.getElementById("photo2");
let photo3 = document.getElementById("photo3");
let photo4 = document.getElementById("photo4");

let ocean = document.getElementById("ocean");
let descrip1 = document.getElementById("descrip1");
let title = document.getElementById("title");
let productList = document.getElementById("productList");
let fillingimage = document.getElementById("fillingimage");

// sticky header

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector('.header');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// this function adds to the location description list 

function addLocation(input) {
    let indicator = document.querySelector('ul.indicator');
    let newLocation = document.createElement('li');
    newLocation.textContent = input;
    indicator.appendChild(newLocation);
}

// these eventlisteners listen for bubble up events and connect text to it

const product = document.querySelector('.products-list');
product.addEventListener("mouseenter", function(){addLocation(" > you clicked a product")}, false);

const firstButton = document.querySelector('.nav-button:nth-child(1)');
firstButton.addEventListener("mouseenter", function(){addLocation("  > you are walking next to the highway ")}, false);

const secondButton = document.querySelector('.nav-button:nth-child(2)');
secondButton.addEventListener("mouseenter", function(){addLocation("  > if you look up, right now, the sky is blue blue blue ")}, false);

const thirdButton = document.querySelector('.nav-button:nth-child(3)');
thirdButton.addEventListener("mouseenter", function(){addLocation("  > it is an ungraspable type of blue, you dont know where the sky will end ")}, false);

// loader

const loader = document.querySelector(".loader"); 

window.addEventListener("load", () => {
    console.log("it worked!");
    setTimeout(blockLoader, 17000);
});

function blockLoader() {
    console.log("this also works!");
    loader.style.opacity = "0.1%";
}




