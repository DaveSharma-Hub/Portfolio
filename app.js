
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const extra = intro.querySelector("h2");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");
const end2 = section.querySelector("h2");
// //SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: intro,
  triggerHook: 0
})
 // .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
const textAnim2 = TweenMax.fromTo(extra, 3, { opacity: 0 }, { opacity: 1 });

let scene2 = new ScrollMagic.Scene({
  duration: 5500,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
    duration: 7500,
    triggerElement: end2,
    triggerHook: 0
  })
    .setTween(textAnim2)
    .addTo(controller);
//Video Animation

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 41.6);

// enterView({
//   selector: 'section',
//   enter: function(el) {
//       el.classList.add('entered');
//   }
// })

// var frameNumber = 0, // start video at frame 0
// // lower numbers = faster playback
// playbackConst = 1000, 
// // get page height from video duration
// setHeight = document.getElementById("set-height"), 
// // select video element         
// vid = document.getElementById("v0"); 
// // var vid = $('#v0')[0]; // jquery option

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
// setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });


// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
// var frameNumber  = window.pageYOffset/playbackConst;
// vid.currentTime  = frameNumber;
// window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);