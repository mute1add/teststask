// window.addEventListener("DOMContentLoaded", function() {
//
//   let img = document.querySelectorAll('.image'),
//     btn = document.querySelectorAll('.button');
//
//   function hideTab(a) {
//     for (let i = a; i < img; i++) {
//       img[i].classList.remove('show');
//       img[i].classList.add('hide')
//       console.log('first')
//     }
//   }
//
//   function showTab(b) {
//     if (img[b].classList.contains('hide')) {
//       img[i].classList.add('show');
//       img[i].classList.remove('hide')
//       console.log("second")
//     }
//   }
//
//   btn.addEventListener('click', function f(event) {
//     let target = event.target;
//     if (target && target.classList.contains("button")) {
//       for (let i = 0; i < tab.length; i++) {
//         if (target == img[i]) {
//           hideTab(0)
//           showTab(1)
//         }
//       }
//     }
//   })
//
//   console.log(img, button);
// })
// $('.slides').slick({
//   slidesToShow: 1,
//   autoplay:true,
//   pauseOnHover:true,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slides-nav'
// })
//
// $('.slides-nav').slick({
//   slidesToShow: 3,
//   autoplay:true,
//   asNavFor: '.slides',
//   pauseOnHover:true,
//   centerMode: true,
//   focusOnSelect: true
// });
//
// let line = document.querySelectorAll('hr'),
//     change= document.getElementById('change-button')
// function changeLine(){
//   let wid = 0;
//
//   let id = setInterval(frame, 10)
//   function frame(){
//     if (wid == 100){
//       clearInterval(id)
//     }
//     else{
//       wid++;
//       line[i].style.width = wid + "vw";
//     }
//   }
// }
// change.addEventListener('mouseover', changeLine)
// console.log(line)

let menus = document.querySelector('.menus'),
  menu = document.querySelector('.hover-menu'),
  features = document.getElementById('features'),
  featuresMenu = document.getElementById("menuFeature"),
  fet = document.querySelector('.fet'),
  com = document.querySelector('.com'),
  legal = document.querySelector('.legal'),
  first = document.querySelector('.first-list');
second = document.querySelector('.second-list');
third = document.querySelector('.third-list');
// menu.addEventListener('click', function () {
//   if (menus.style.display = "flex"){
//     menus.style.display = "none";
//     console.log("cliks 2");
//   }
// })
let flag = 0;
let flag2 = 0;
let flag3 = 0;
let flag4 = 0;
let flag5 = 0;
menu.addEventListener('click', function () {
  if (flag == 0) {
    menus.style.display = "flex";
    console.log("click");
    flag++;
    console.log(flag)
  } else if (flag == 1) {
    menus.style.display = 'none';
    flag = 0;
  }
});
features.addEventListener('click', function () {
  if (flag2 == 0) {
    featuresMenu.style.display = "flex";
    features.style.height = "50vh";
    console.log("click");
    flag2++;
    console.log(flag2)
  } else if (flag2 == 1) {
    featuresMenu.style.display = 'none';
    features.style.height = "9vh";
    flag2 = 0;
  }
});
fet.addEventListener('click', function () {
  if (flag3 == 0) {
    first.style.display = "flex";
    console.log("click");
    flag3++;
    console.log(flag2)
  } else if (flag3 == 1) {
    first.style.display = 'none';
    flag3 = 0;
  }
});
com.addEventListener('click', function () {
  if (flag4 == 0) {
    second.style.display = "flex";
    console.log("click");
    flag4++;
    console.log(flag2)
  } else if (flag4 == 1) {
    second.style.display = 'none';
    flag4 = 0;
  }
});

ScrollReveal().reveal('.jumbotron',  { delay: 1050 });
ScrollReveal().reveal('.input',  { delay: 1550 });
ScrollReveal().reveal('.unified',  { delay: 1550 });
ScrollReveal().reveal('.specify',  { delay: 1550 });
ScrollReveal().reveal('.images',  { delay: 1750 });
ScrollReveal().reveal('.list-icons',  { delay: 1550 });
ScrollReveal().reveal('.slides',  { delay: 1550 });
ScrollReveal().reveal('.dynamic',  { delay: 1550 });
ScrollReveal().reveal('.continous',  { delay: 2550 });
ScrollReveal().reveal('.slides-nav',  { delay: 1550 });
ScrollReveal().reveal('.paragraph',  { delay: 1750 });
