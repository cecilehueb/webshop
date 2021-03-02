

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

// makes background of imagies visible 
let photo1 = document.getElementById("photo1");
let photo2 = document.getElementById("photo2");
let photo3 = document.getElementById("photo3");
let photo4 = document.getElementById("photo4");

photo1.addEventListener("mouseenter", () => {
  photo1.parentElement.style.background = "rgb(10,73,32);";
  photo1.parentElement.style.background = "linear-gradient(0deg, rgba(10,73,32,0.7189250700280112) 5%, rgba(128,218,32,0.6573004201680672) 74%)";
})

photo1.addEventListener("mouseleave", () => {
  photo1.parentElement.style.background = "none";
})

photo2.addEventListener("mouseenter", () => {
  photo2.parentElement.style.background = "rgb(47,51,106)";
  photo2.parentElement.style.background = "linear-gradient(0deg, rgba(47,51,106,0.7833508403361344) 0%, rgba(118,126,138,1) 100%)";
})

photo2.addEventListener("mouseleave", () => {
  photo2.parentElement.style.background = "none";
})

photo3.addEventListener("mouseenter", () => {
  photo3.parentElement.style.background = "rgb(4,158,43);";
  photo3.parentElement.style.background = "linear-gradient(0deg, rgba(4,158,43,0.7749474789915967) 5%, rgba(64,98,91,0.7469362745098039) 74%)";
})

photo3.addEventListener("mouseleave", () => {
  photo3.parentElement.style.background = "none";
})

photo4.addEventListener("mouseenter", () => {
  photo4.parentElement.style.background = "rgb(6,36,242);";
  photo4.parentElement.style.background = "linear-gradient(0deg, rgba(6,36,242,0.7749474789915967) 5%, rgba(34,250,209,0.9374124649859944) 82%)";
})

photo4.addEventListener("mouseleave", () => {
  photo4.parentElement.style.background = "none";
})

// this function adds to the location description list 

function addLocation(input) {
    let indicator = document.querySelector('ul.indicator');
    let newLocation = document.createElement('li');
    newLocation.textContent = input;
    indicator.appendChild(newLocation);
}

// these eventlisteners listen for bubble up events and connect text to it

photo1.addEventListener("mouseenter", function(){addLocation(" > the grass is layered like a cake")}, false);

photo2.addEventListener("mouseenter", function(){addLocation(" > you clicked a product")}, false);

photo3.addEventListener("mouseenter", function(){addLocation(" > within 20 minutes the sky goes black")}, false);

photo4.addEventListener("mouseenter", function(){addLocation(" > you clicked a product")}, false);


const searchbar = document.querySelector(".searchbar");
searchbar.addEventListener("mouseenter", function(){addLocation(" > you are rushing over the highway")}, false);

const firstButton = document.querySelector('.nav-button:nth-child(1)');
firstButton.addEventListener("mouseenter", function(){addLocation("  > the sky is an etarnal tint of ungraspable blue ")}, false);

const secondButton = document.querySelector('.nav-button:nth-child(2)');
secondButton.addEventListener("mouseenter", function(){addLocation("  > do you see the building? ")}, false);

const thirdButton = document.querySelector('.nav-button:nth-child(3)');
thirdButton.addEventListener("mouseenter", function(){addLocation("  >  you are offered a 24h surface")}, false);

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




