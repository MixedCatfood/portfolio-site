const scrollElements = document.querySelectorAll(".js-scroll");
const meleeImages = document.getElementsByClassName('project1Figure');
const tipCalculatorImages = document.getElementsByClassName('project2Figure')

scrollElements.forEach((el) => {
  el.style.opacity = 0
})

const elementInView = (el, scrollOffset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
  );

};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
  element.style.opacity = '1';
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  })
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
})


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n, arr) {
  showDivs(slideIndex += n, arr);
}

function typingAnimation() {
  typingAnimationPart1();
  setTimeout(typingAnimationPart2, 1500);
}

function typingAnimationPart1() {
  document.getElementById('typed1').style.animation = "typing 1.5s steps(23, end) forwards";
}
function typingAnimationPart2() {
  document.getElementById('typed2').style.animation = "typing 1.5s steps(20, end) forwards";
}

function showDivs(n, arr) {
  var i;
  if (n > arr.length) {
    slideIndex = 1
  };

  if (n < 1) {
    slideIndex = arr.length
  };
  for (i = 0; i < arr.length; i++) {
    arr[i].style.display = "none";  
  }
  arr[slideIndex-1].style.display = "block";  
}

function sendEmail() {
    Email.send({
      Host : "smtp.gmail.com",
      Username : "username",
      Password : "password",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
  message => alert(message)
);
}
