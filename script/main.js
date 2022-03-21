const showHide = (e) => {
    let myNav = document.querySelector(".sidenav");
    let myBlackEl = document.querySelector(".black_");
    myNav.classList.toggle("active");
    myBlackEl.classList.toggle("display");
    myBlackEl.classList.toggle("index");
};

document.querySelector(".humburger").addEventListener("click", showHide);
document.querySelector(".black_").addEventListener("click", showHide);
document.querySelector(".close").addEventListener("click", showHide);
