const bubblesContainer = document.querySelector('section.bubbles');

for (let i = 0; i < 100; i++) {
  const bubbles = document.createElement('div');
  bubbles.classList.add('bubble');
  bubblesContainer.appendChild(bubbles);
}

function animateBubbles() {
  anime({
    targets: 'div.bubble',
    translateX: function() {
      return anime.random(-700, 700);
    },
    translateY: function() {
      return anime.random(-500, 500);
    },
    scale: function() {
      return anime.random(1, 5);
    },
    easing: 'linear',
    duration: 3000,
    delay: anime.stagger(1),
    complete: animateBubbles
  });
}

animateBubbles();

const sectionTextAnimation = document.querySelector("section.text-animation");

const textAnimation = document.querySelector('h2.text-animation');

textAnimation.innerHTML = textAnimation.textContent.replace(/\S/g, '<span>$&</span>');

const options = {
  root: null,
  threshold: 0.30,
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    // console.log(entry.isIntersecting);
    if(entry.isIntersecting) {
      anime.timeline({
        loop: false
      })
      .add({
        targets: 'h2.text-animation span',
        translateY: [-600, 0],
        scale: [10, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: anime.stagger(100)
      })
      .add({
        targets: 'h2.text-animation span',
        translateX: [0, -1000],
        scale: [1, 1],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: anime.stagger(100)
      })
      .add({
        targets: 'h2.text-animation span',
        translateX: [1000, 0],
        scale: [1, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: anime.stagger(100)
      })
      .add({
        targets: 'h2.text-animation span',
        translateX: [0, 0],
        scale: [1, 30],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: anime.stagger(100)
      })
      .add({
        targets: 'h2.text-animation span',
        translateX: [function() {
          return anime.random(-1000, 1000);
        }, 0],
        translateY: [function() {
          return anime.random(-1000, 1000);
        }, 0],
        scale: [1, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: anime.stagger(100)
      })
      // observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(sectionTextAnimation);

const pPar = document.querySelector('p');

pPar.innerHTML = pPar.textContent.replace(/\S/g, '<span>$&</span>');

const parAnimation = anime.timeline({
  targets: 'section.paragr div.paragr span',
  easing: 'easeInOutExpo',
  loop: true
});

parAnimation.add({
  rotate: function() {
    return anime.random(-360, 360);
  },
  translateX: function() {
    return anime.random(-500, 500);
  },
  translateY: function() {
    return anime.random(-700, 700);
  },
  duration: 4000,
  delay: anime.stagger(50)
})
.add({
  rotate: 0,
  translateX: 0,
  translateY: 0,
  duration: 2000,
  delay: anime.stagger(50)
})
