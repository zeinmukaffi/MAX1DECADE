// paralax

const landingImg = document.getElementById("landing_img");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  landingImg.style.marginTop = value * -0.5 + "px";
});

// animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    // transition slide left
    if (entry.isIntersecting) {
      entry.target.classList.add("show-bottom");
    } else {
      entry.target.classList.remove("show-bottom");
    }

    if (entry.isIntersecting) {
      entry.target.classList.add("show-top");
    }
    //  else {
    //   entry.target.classList.remove('show-top')
    // }
  });
});

// animation left
const hiddenElementLeft = document.querySelectorAll(".hidden-bottom");

hiddenElementLeft.forEach((el) => observer.observe(el));

// animation top
const hiddenElementTop = document.querySelectorAll(".hidden-top");

hiddenElementTop.forEach((el) => observer.observe(el));

// text img
const hobbyImg = document.querySelectorAll("#hobby .hobby-img");
const hobbyHide = document.querySelectorAll(".hobby-img-hide");
