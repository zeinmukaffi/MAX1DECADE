// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function currentDiv(n) {
//   showDivs((slideIndex = n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " w3-white";
// }

// paralax start
let headParalax = document.querySelector("#home #head_para");
let aboutParalax = document.querySelector('#about .about-paralax')
let peopleImg = document.querySelector('#people img')
let aboutCircle = document.querySelector('#about .circle-about')

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  headParalax.style.top = value * -0.5 + "px";
  aboutParalax.style.marginTop = value * -0.2 + "px";
  peopleImg.style.top = value * 0.2 + "px";

});
// paralax end

// text effect
let paragraphs = [...document.querySelectorAll("#wedo h1")];
let spans = [];

paragraphs.forEach(paragraph => {
  let htmlString = '';
  let pArray = paragraph.textContent.split('');
  for(let i = 0; i < pArray.length; i++) {
    htmlString += `<span>${pArray[i]}</span>`;
  }
  paragraph.innerHTML = htmlString;
})

spans = [...document.querySelectorAll('span')];

function revealSpans() {
  for(let i = 0; i < spans.length; i++) {
    console.log(spans[i])
    if(spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2) {
      let {left, top} = spans[i].getBoundingClientRect();
      top = top - (window.innerHeight * .4);
      let opacityValue = 1 - ((top *.01) +(left * 0.001)) < 0.1 ? 0.1 : 1 - ((top *.01)+(left* 0.001)). toFixed(3);
      opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
      spans[i].style.opacity = opacityValue;
    }
     
  }
}

window.addEventListener('scroll' ,() => {
  revealSpans()
})
revealSpans();

// text effect 2
let paragraphs2 = [...document.querySelectorAll("#about h3")];
let spans2 = [];

paragraphs2.forEach(paragraph => {
  let htmlString = '';
  let pArray = paragraph.textContent.split('');
  for(let i = 0; i < pArray.length; i++) {
    htmlString += `<span>${pArray[i]}</span>`;
  }
  paragraph.innerHTML = htmlString;
})

spans2 = [...document.querySelectorAll('span')];

function revealSpans2() {
  for(let i = 0; i < spans2.length; i++) {
    console.log(spans2[i])
    if(spans2[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2) {
      let {left, top} = spans2[i].getBoundingClientRect();
      top = top - (window.innerHeight * .4);
      let opacityValue = 1 - ((top *.01) +(left * 0.001)) < 0.1 ? 0.1 : 1 - ((top *.01)+(left* 0.001)). toFixed(3);
      opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
      spans2[i].style.opacity = opacityValue;
    }
     
  }
}

window.addEventListener('scroll' ,() => {
  revealSpans2()
})
revealSpans2();


