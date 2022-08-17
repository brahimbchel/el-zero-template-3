let nums = document.querySelectorAll(".stat .num");
let sec = document.querySelector(".stat")
let started = false 

let prgress = document.querySelectorAll(".progresse span");
let section = document.querySelector(".skills");


window.onscroll = function () {
  // number increese
  if (window.scrollY >= sec.offsetTop) {
    if(!started) {
      nums.forEach(n => startCount(n))
      started = true
    }
  }

  // animation width onscrolling
  if(window.scrollY >= section.offsetTop - 250) {
    prgress.forEach((e) => {
      e.style.width = e.dataset.width;
    })
  } else {
    prgress.forEach((e) => {
      e.style.width = 0;
    })
  }
}


function startCount(el) {
  let goal = el.dataset.goal
  let count = setInterval(() => {
    el.textContent++
    if(el.textContent == goal) {
      clearInterval(count)
    }
  }, 5000 / goal)
}
