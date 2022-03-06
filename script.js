const change = document.querySelector(".color__change--btn");
const logo = document.querySelector(".logos");
const btn__background = document.querySelector(".color__change--btn");
let black_text = document.querySelectorAll(".text-black");
let white_text = document.querySelectorAll(".text-white");
let black__prim__bg = document.querySelectorAll(".bg-black--primary");
let black__bg = document.querySelectorAll(".bg-black");
let white__prim__bg = document.querySelectorAll(".bg-white--primary");
let white__bg = document.querySelectorAll(".bg-white");
let white_select__hover = document.querySelectorAll(
  ".link__hover--effect-white"
);
let black_select__hover = document.querySelectorAll(".nav_hover--black");
let myLogo = document.querySelector(".footer__logo-img");
change.addEventListener("click", changeColor);
function changeColor() {
  if (logo.classList.contains("fa-moon")) {
    logo.classList.remove("fa-moon");
    logo.classList.add("fa-sun");
    btn__background.style.background = "#f8f8f8";
    document.querySelector(".sun--logo").style.top = "50%";
    document.querySelector(".moon--logo").style.top = "-50%";
    for (let i = 0; i < black_text.length; i++) {
      black_text[i].style.color = "#fff";
    }
    for (let i = 0; i < white__prim__bg.length; i++) {
      white__prim__bg[i].style.color = "#242424";
    }
    for (let i = 0; i < white__bg.length; i++) {
      white__bg[i].style.background = "#1c1d25";
    }
    for (let i = 0; i < black__prim__bg.length; i++) {
      black__prim__bg[i].style.background = "#f8f8f8";
    }
    for (let i = 0; i < black__bg.length; i++) {
      black__bg[i].style.background = "#fff";
    }
    for (let i = 0; i < white_text.length; i++) {
      white_text[i].style.color = "#242424";
    }
    for (let i = 0; i < black_select__hover.length; i++) {
      black_select__hover[i].style.setProperty("--black", "white");
    }
    for (let i = 0; i < white_select__hover.length; i++) {
      white_select__hover[i].style.setProperty("--white", "black");
    }
    myLogo.setAttribute("src", `./assets/bLogo.png`);
  } else {
    logo.classList.add("fa-moon");
    logo.classList.remove("fa-sun");
    btn__background.style.background = "#6030b1";
    document.querySelector(".sun--logo").style.top = "-50%";
    document.querySelector(".moon--logo").style.top = "50%";
    for (let i = 0; i < black_text.length; i++) {
      black_text[i].style.color = "#242424";
    }
    for (let i = 0; i < white__prim__bg.length; i++) {
      white__prim__bg[i].style.color = "#f8f8f8";
    }
    for (let i = 0; i < white__bg.length; i++) {
      white__bg[i].style.background = "#fff";
    }
    for (let i = 0; i < black__prim__bg.length; i++) {
      black__prim__bg[i].style.background = "#242424";
    }
    for (let i = 0; i < black__bg.length; i++) {
      black__bg[i].style.background = "#1c1d25";
    }
    for (let i = 0; i < white_text.length; i++) {
      white_text[i].style.color = "#fff";
    }
    for (let i = 0; i < black_select__hover.length; i++) {
      black_select__hover[i].style.setProperty("--black", "black");
    }
    for (let i = 0; i < white_select__hover.length; i++) {
      white_select__hover[i].style.setProperty("--white", "white");
    }
    myLogo.setAttribute("src", `./assets/wLogo.png`);
  }
}
