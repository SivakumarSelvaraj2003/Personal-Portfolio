//dark mode and light mode
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/crescent-moon-png-35116 (1).png";
  } else {
    icon.src = "images/sun-256.png";
  }
};

//GSAP ScrollTrigger Link
gsap.registerPlugin(ScrollTrigger);
AOS.init();
//Navbar Social Media Icons JS
if (window.innerWidth > 768) {
  const iconLinkedin = document.querySelector(".social-media1");
  const iconGithub = document.querySelector(".social-media2");
  //Linked In Icon Animation
  gsap.to(iconLinkedin, {
    duration: 1.5,
    x: 40,
    rotate: 360,
    delay: 0.2,
    ease: "bounce.out",
    onStart: () => {
      setTimeout(() => {
        iconLinkedin.style.color = "var(--fo-color)";
      }, 700);
    },
  });
  //Github Icon Animation
  gsap.to(iconGithub, {
    duration: 1.5,
    x: 40,
    rotate: 360,
    delay: 0.2,
    ease: "bounce.out",
    onStart: () => {
      setTimeout(() => {
        iconGithub.style.color = "var(--fo-color)";
      }, 700);
    },
  });
}

//Drawing Line
gsap.to(".line", {
  width: "100%",
  duration: 1.5,
  ease: "power1.out",
});

//Introduction Type Animation
var typed = new Typed(".text-para", {
  strings: ["Frontend Developer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 1000,
});

//Emoji Animation
gsap.to(".emoji", {
  x: -10, // Moves the emoji up
  rotation: 15, // Tilts it slightly
  repeat: -1, // Infinite loop
  yoyo: true, // Moves back and forth
  duration: 0.5, // Speed of animation
  ease: "power1.inOut",
});

//Introduction GSAP Animation
const headingAnimation = document.querySelector(".top-animation");
const headingNameAnimation = document.querySelector(".highlight");
//top animation
gsap.to(headingAnimation, {
  duration: 1,
  x: -30,
  delay: 0.1,
  ease: "power2.inOut",
});
//Highlight Animation
gsap.to(headingNameAnimation, {
  duration: 1,
  x: 10,
  delay: 0.1,

  ease: "power2.inOut",
});

//Introduction GSAP Animation For 350px
if (window.innerWidth > 350) {
  const headingAnimation = document.querySelector(".top-animation");
  const headingNameAnimation = document.querySelector(".highlight");
  //top animation
  gsap.to(headingAnimation, {
    duration: 1,
    x: -10,
    delay: 0.1,

    ease: "power2.inOut",
  });
  //Highlight Animation
  gsap.to(headingNameAnimation, {
    duration: 1,
    x: 10,
    delay: 0.1,
    ease: "power2.inOut",
  });
}
//Introduction Icons Loop
const icons = ["👋", "👨‍💻 ", "🚀", "🎨", "🏆", "💻", "🌟", "🎯"];
const iconElement = document.getElementById("animated-icon");
let index = 0;
function changeIcon() {
  iconElement.innerText = icons[index];
  index = (index + 1) % icons.length;
  setTimeout(changeIcon, 1000);
}
changeIcon();

//About Me JS And GSAp
gsap.registerPlugin(ScrollTrigger);

const aboutMeImage = document.getElementById("aboutImage");
const buttonLoader = document.querySelector(".loader");
const infoSpans = document.querySelectorAll(".info-span");
const infoDiv = document.querySelector(".info");

if (infoDiv) {
  ScrollTrigger.create({
    trigger: infoDiv,
    start: "top 80%", // Adjust this value based on when you want the animation to start
    end: "bottom 20%",
    onEnter: () => gsap.delayedCall(1, openInfo),
    onLeaveBack: () => closeInfo(),
  });
}

function openInfo() {
  if (infoDiv) infoDiv.style.maxHeight = infoDiv.scrollHeight + "px";
  if (aboutMeImage) aboutMeImage.style.filter = "none";
  if (buttonLoader) buttonLoader.setAttribute("data-text", "Close it...");

  // About Me Drawing Line Animation
  infoSpans.forEach((span) => {
    gsap.to(span, {
      backgroundSize: "100%",
      duration: 0.2,
      ease: "power1.inOut",
    });
  });

  // About Me Image Animation
  if (window.innerWidth > 992) {
    gsap.to(aboutMeImage, {
      duration: 0.2,
      y: 15,
      ease: "power2.inOut",
    });
  }
}

function closeInfo() {
  if (infoDiv) infoDiv.style.maxHeight = "0px";
  if (aboutMeImage) aboutMeImage.style.filter = "grayscale(1)";
  if (buttonLoader) buttonLoader.setAttribute("data-text", "Open it...");

  infoSpans.forEach((span) => {
    gsap.to(span, {
      backgroundSize: "0%",
      duration: 0.2,
      ease: "power1.inOut",
    });
  });

  gsap.to(aboutMeImage, {
    duration: 0.2,
    y: 0,
    ease: "power2.inOut",
  });
}
//resume image animation
gsap.to(".resume-img", {
  scale: 1.5,
  repeat: -1,
  yoyo: true,
  duration: 0.6,
  ease: "power1.inOut",
});

//Experience JS
document.addEventListener("DOMContentLoaded", function () {
  const sectionOne = document.querySelector(".section1");
  const sectionTwo = document.querySelector(".section2");

  function setupAnimations() {
    gsap.set([sectionOne, sectionTwo], { x: 0 });

    gsap.to([sectionOne, sectionTwo], {
      opacity: 1,
      scrollTrigger: {
        trigger: sectionOne,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(sectionOne.querySelectorAll("h4, p, i"), {
      color: "var(--fo-color)",
      duration: 1,
      scrollTrigger: {
        trigger: sectionOne,
        start: "top 80%",
      },
    });

    gsap.to(sectionTwo.querySelectorAll("h4, p, i"), {
      color: "var(--fo-color)",
      duration: 1,
      scrollTrigger: {
        trigger: sectionTwo,
        start: "top 80%",
      },
    });

    gsap.to(".bi-award", {
      color: "yellow",
      duration: 1,
      scrollTrigger: {
        trigger: sectionOne,
        start: "top 80%",
      },
    });

    // Responsive Animations
    if (window.innerWidth > 1024) {
      gsap.to(sectionOne, {
        x: 70,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionOne,
          start: "top 80%",
        },
      });

      gsap.to(sectionTwo, {
        x: -70,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionTwo,
          start: "top 80%",
        },
      });
    }

    if (window.innerWidth > 1280) {
      gsap.to(sectionOne, {
        x: 70,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionOne,
          start: "top 80%",
        },
      });

      gsap.to(sectionTwo, {
        x: -70,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionTwo,
          start: "top 80%",
        },
      });
    }
  }

  function refreshAnimations() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    setupAnimations();
  }

  setupAnimations();
  window.addEventListener("resize", refreshAnimations);
});

// Select all cards
const cards = document.querySelectorAll(".card");

// service border animation
gsap.fromTo(
  cards,
  { borderRadius: "50%" }, // Start state (square)
  {
    borderRadius: "5%", // End state (circle)
    duration: 2,
    delay: 0.5, // Animation duration
    ease: "expo.out", // Smooth easing
    scrollTrigger: {
      trigger: ".container4",
      start: "top 80%",
      toggleActions: "play reverse play reverse", // Reverses when leaving viewport
    },
  }
);

//Service emoji animation

gsap.to(".service-emoji", {
  scale: 0.8, // Shrinks instead of enlarging
  repeat: -1,
  yoyo: true,
  duration: 0.5,
  ease: "power1.inOut",
});

//Project GSAP Scale Up Animation
//Mini Project
const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  const mask = project.querySelector(".mask");
  const image = project.querySelector(".project-image");

  const tl = gsap
    .timeline({ paused: true })
    .from(image, {
      scale: 2,
      duration: 0.5,
    })
    .to(
      mask,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.5,
      },
      0
    )
    .to(mask, {
      scale: 0.95,
      duration: 0.5,
    });

  image.addEventListener("mouseenter", () => {
    tl.restart();
  });

  image.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});

//Main Project
const mainProjects = document.querySelectorAll(".projects");
mainProjects.forEach((project) => {
  const masks = project.querySelector(".masks");
  const images = project.querySelector(".projects-img");

  const tl = gsap
    .timeline({ paused: true })
    .from(images, {
      scale: 2,
      duration: 0.5,
    })
    .to(
      masks,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.5,
      },
      0
    )
    .to(masks, {
      scale: 0.95,
      duration: 0.5,
    });

  images.addEventListener("mouseenter", () => {
    tl.restart();
  });

  images.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});

//Contact Me GSAP Animation
function createTimeline(trigger, iconSelector, nameSelector, xOffset) {
  const icon = document.querySelector(iconSelector);
  const name = document.querySelector(nameSelector);

  if (!icon || !name) return;

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })
    .to(iconSelector, {
      x: xOffset,
      duration: 1,
      ease: "power1.inOut",
    })
    .to(iconSelector, {
      x: 0,
      duration: 1,
      ease: "power1.inOut",
      onStart: () => {
        icon.style.backgroundColor = "var(--bg-color)";
        icon.style.transition = "all .2s ease-in";
        name.style.color = "#E74C3C";
      },
    });
}

createTimeline(".user-icon", ".user-icon", "#user-name", 200);
createTimeline(".laptop-icon", ".laptop-icon", "#laptop-name", 200);
createTimeline(".map-icon", ".map-icon", "#map-name", 420);
createTimeline(".envelope-icon", ".envelope-icon", "#envelope-name", 300);
createTimeline(".phone-icon", ".phone-icon", "#phone-name", 160);

//Contact Me Map And Envelope Icons For 500px
function handleMapAndEnvelopeAnimation() {
  const mapIcon = document.querySelector(".map-icon");
  const mapName = document.querySelector("#map-name");
  const envelopeIcon = document.querySelector(".envelope-icon");
  const envelopeName = document.querySelector("#envelope-name");

  if (window.innerWidth < 500) {
    //Map Icon Animation
    if (mapIcon && mapName) {
      const tlMap = gsap.timeline({
        scrollTrigger: {
          trigger: ".map-icon",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tlMap.to(".map-icon", {
        x: 210,
        duration: 1,
        ease: "power1.inOut",
      });

      tlMap.to(".map-icon", {
        x: 0,
        duration: 1,
        ease: "power1.inOut",
        onStart: () => {
          mapIcon.style.backgroundColor = "var(--bg-color)";
          mapIcon.style.transition = "all .2s ease-in";
          mapName.style.color = "#E74C3C";
        },
      });
    }

    // Envelope icon animation
    if (envelopeIcon && envelopeName) {
      const tlEnvelope = gsap.timeline({
        scrollTrigger: {
          trigger: ".envelope-icon",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tlEnvelope.to(".envelope-icon", {
        x: 210,
        duration: 1,
        ease: "power1.inOut",
      });

      tlEnvelope.to(".envelope-icon", {
        x: 0,
        duration: 1,
        ease: "power1.inOut",
        onStart: () => {
          envelopeIcon.style.backgroundColor = "var(--bg-color)";
          envelopeIcon.style.transition = "all .2s ease-in";
          envelopeName.style.color = "#E74C3C";
        },
      });
    }
  }
}

handleMapAndEnvelopeAnimation();


//contact icons animation
gsap.from(".contact-media p", {
  scale: 0,
  opacity: 0,
  duration: 2,
  repeat: -1,
  ease: "elastic.out(1, 0.5)",
  stagger: 0.2,
});

document.getElementById("year").textContent = new Date().getFullYear();

//Scroll Top Button
const scrollToTopButton = document.getElementById("scrollToTop");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const toggleScrollToTopButton = () => {
  if (window.scrollY === 0) {
    scrollToTopButton.style.display = "none";
  } else {
    scrollToTopButton.style.display = "block";
  }
};
scrollToTopButton.style.display = "none";
window.addEventListener("scroll", toggleScrollToTopButton);
