// Local Reviews Data
const reviews = [
    {
        id: 1,
        title: "Susan Smith",
        job: "Web Developer",
        image: "images/img1.jpg",
        text: "Crafting functional and dynamic websites through coding and programming, focusing on server-side and client-side technologies to create responsive, efficient, and user-friendly web experiences."

    },
    {
        id: 2,
        title: "Sara Jones",
        job: "Web Designer",
        image: "images/img2.jpg",
        text: "Creating visually appealing and intuitive website layouts, focusing on user interface and user experience design to ensure engaging and accessible digital experiences through the use of graphic design and web technologies."
    },
    {
        id: 3,
        title: "Harry James",
        job: "Application Developer",
        image: "images/img3.jpg",
        text: "Developing mobile or desktop applications by writing, testing, and maintaining code to create efficient, user-friendly software solutions that meet specific user needs and business requirements."
    }
];

// Select Item
let image = document.querySelector("#image");
let author = document.querySelector("#author");
let job = document.querySelector("#job");
let info = document.querySelector("#info");

let prev = document.querySelector("#prev-btn");
let next = document.querySelector("#next-btn");
let random = document.querySelector("#rand");

// Set Start Item
let currentItem = 0;

// Function for show Item
showPerson = () => {
    const item = reviews[currentItem];
    image.src = item.image;
    author.innerHTML = item.title;
    job.innerHTML = item.job;
    info.innerHTML = item.text;
}

// Show Initial Item
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
});

// Show Next Item
next.addEventListener("click", function(){
    currentItem ++;

    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson();
})

// Show Prev Item
prev.addEventListener("click", function(){
    currentItem --;

    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson();
})

// Show Random Item
random.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})
