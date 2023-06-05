let slider = document.getElementById("slider");
let slides = document.querySelectorAll(".slider > input");
let backButton = document.getElementById('back-button');
let forwardButton = document.getElementById('forward-button');
let numVisibleSlides = 3;
let prevSlide = 0;

let form = document.getElementsByTagName("form")[0];
form.addEventListener('change', (e) => {
    console.log(e.target)
})


backButton.addEventListener('click', (e) => {
    // slides.item(0).classList.toggle('gallery-cursor');
})


 slides.forEach((slide, index) => {
    //  slide.style.transitionDelay = (0.5 * index) + "s";
    slide.addEventListener('change', (e) => {
        slider.getElementsByClassName('previous')[0].classList.toggle('previous')
        slides[prevSlide].classList.toggle('previous');
        prevSlide = index;
    })
 })

// let sheet = document.getElementById("gallery-styles").sheet;
// let lastCssRule = sheet.cssRules.length;

// var cssRules = [];
// let divs = "";
// for (let z=0; z < numVisibleSlides; z++ ) {
//     divs+=" + div";
//     cssRules[z] = `.slider > div.gallery-cursor${divs} {
//         transition-delay: calc(var(--slide-delay) * ${z+1});
//     }`;
//     sheet.insertRule(cssRules[z], lastCssRule + z);

// }

// let invisRule = `.slider > div.gallery-cursor ${divs} ~ div {
//     width:0;
// }`;

// sheet.insertRule(invisRule, sheet.cssRules.length);
// console.log(sheet)