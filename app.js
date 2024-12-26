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
        iconLinkedin.style.color = "white";
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
        iconGithub.style.color = "white";
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
const aboutMeImage = document.getElementById("aboutImage"); 
const buttonLoader = document.querySelector(".loader"); 
const infoSpans = document.querySelectorAll(".info-span"); 

document.getElementById("toggle-btn").addEventListener("click", function () {
  const infoDiv = document.querySelector(".info"); 
  if (infoDiv && infoDiv.style.maxHeight && infoDiv.style.maxHeight !== "0px") {
    
    infoDiv.style.maxHeight = "0px"; 
    if (aboutMeImage) aboutMeImage.style.filter = "grayscale(1)"; 
    if (buttonLoader) buttonLoader.setAttribute("data-text", "Open it...");

  //About Me Drawing Line Animation
    infoSpans.forEach((span) => {
      gsap.to(span, {
        backgroundSize: "0%",
        duration: 0.2,
        ease: "power1.inOut",
      });
  //About Me Image Animation      
      gsap.to(aboutMeImage, {
        duration: 0.2,
        y: 0,
        ease: "power2.inOut",
      });
    });
  
  } else {
    if (infoDiv) infoDiv.style.maxHeight = infoDiv.scrollHeight + "px";
    if (aboutMeImage) aboutMeImage.style.filter = "none";
    if (buttonLoader) buttonLoader.setAttribute("data-text", "Close it...");
    //About Me Drawing Line Animation
    infoSpans.forEach((span) => {
      gsap.to(span, {
        backgroundSize: "100%",
        duration: 0.2,
        ease: "power1.inOut",
      });
      //About Me Image Animation
      if (window.innerWidth > 768) {
        gsap.to(aboutMeImage, {
          duration: 0.2,
          y: 40,
          ease: "power2.inOut",
        });
      }
    });
  }
});

//Experience JS
const sectionOne = document.querySelector(".section1");
const sectionTwo = document.querySelector(".section2");
//Experience GSAP for 768px
function setupAnimations() {
  if (window.innerWidth < 768) {
    gsap.to(sectionOne.querySelectorAll("h4, p, i"), {
      color: "white",
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: sectionOne,
        start: "top 80%",
        toggleActions: "restart reverse restart reverse",
      },
    });
  
    gsap.to(sectionTwo.querySelectorAll("h4, p, i"), {
      color: "white",
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: sectionTwo,
        start: "top 80%",
        toggleActions: "restart reverse restart reverse",
      },
    });

    gsap.to(".bi-award", {
      color: "yellow",
      duration: 1,
      scrollTrigger: {
        trigger: sectionOne,
        start: "top 80%",
        toggleActions: "restart reverse restart reverse",
      },
    });
    gsap.to(sectionOne, {
      scrollTrigger: {
        trigger: sectionOne,
        start: "top 80%",
        toggleActions: "restart reverse restart none",
      },
      duration: 1,
      x: 0,
      ease: "power1.inOut",
    });
  
    gsap.to(sectionTwo, {
      scrollTrigger: {
        trigger: sectionTwo,
        start: "top 80%",
        toggleActions: "restart reverse restart none",
      },
      duration: 1,
      x: 0,
      ease: "power1.inOut",
    });
  }
}
//Mobile View Experience Animation
 function refreshAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  setupAnimations();
}
setupAnimations();
window.addEventListener("resize", refreshAnimations); 

//Experience GSAP For 1024px
if (window.innerWidth > 1024){
 
  gsap.to(sectionOne.querySelectorAll("h4, p, i"), {
    color: "white", 
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: sectionOne,
      start: "top 80%",
      toggleActions: "restart reverse restart reverse", 
    },
  });

  gsap.to(sectionTwo.querySelectorAll("h4, p, i"), {
    color: "white",
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: sectionTwo,
      start: "top 80%",
      toggleActions: "restart reverse restart reverse",
    },
  });


  gsap.to(sectionOne, {
    scrollTrigger: {
      trigger: sectionOne,
      start: "top 80%",
      toggleActions: "restart reverse restart none",
    },
    duration: 1,
    x: 98,
    ease: "power1.inOut",
  });


  gsap.to(sectionTwo, {
    scrollTrigger: {
      trigger: sectionTwo,
      start: "top 80%",
      toggleActions: "restart reverse restart none",
    },
    duration: 1,
    x: -98,
    ease: "power1.inOut",
  });
}


//Experience GSAP For 1280px

if (window.innerWidth > 1280) {
  gsap.to(sectionOne.querySelectorAll("h4, p, i"), {
    color: "white", 
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: sectionOne,
      start: "top 80%",
      toggleActions: "restart reverse restart reverse", 
    },
  });

  gsap.to(sectionTwo.querySelectorAll("h4, p, i"), {
    color: "white", 
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: sectionTwo,
      start: "top 80%",
      toggleActions: "restart reverse restart reverse",
    },
  });

  gsap.to(sectionOne, {
    scrollTrigger: {
      trigger: sectionOne,
      start: "top 80%",
      toggleActions: "restart reverse restart none",
    },
    duration: 1,
    x: 130,
    ease: "power1.inOut",
  });
  
  gsap.to(sectionTwo, {
    scrollTrigger: {
      trigger: sectionTwo,
      start: "top 80%",
      toggleActions: "restart reverse restart none",
    },
    duration: 1,
    x: -125,
    ease: "power1.inOut",
  });
}

//Navbar icons GSAP Animation
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".icon-scroll",
    start: "top 0%",
    end: "bottom+=300 center",
    scrub: true,
    onLeave: () => {
      const icon = document.querySelector(".icon-scroll");
      icon.style.fontSize = "2rem";
      icon.style.color = "white";
    },
    onEnterBack: () => {
      const icon = document.querySelector(".icon-scroll");
      icon.style.fontSize = "1.5rem";
      icon.style.color = "orangered";
    },
  },
});

// Animation for user icon
timeline.to(".icon-scroll", {
  x: 170,
  y: 580,
  duration: 1,
  rotate: 360,
});

gsap.to(".icon-scroll", {
  x: 170,
  y: 580,
  duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: ".icon-scroll",
    start: "top 0%",
    end: "bottom+=300 center",
    scrub: true,
    onLeave: () => {
      const icon = document.querySelector(".icon-scroll");
      icon.style.fontSize = "2rem";
      icon.style.color = "white";
    },
    onEnterBack: () => {
      const icon = document.querySelector(".icon-scroll");
      icon.style.fontSize = "1.5rem";
      icon.style.color = "orangered";
    },
  },
});
// Animation for briefcase icon
gsap.to(".fa-briefcase", {
  x: -390,
  y: 1325,
  duration: 6,
  delay: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: ".fa-briefcase",
    start: "bottom+=400 center",
    end: "bottom+=700 center",
    scrub: 3,
    onLeave: () => {
      const icon = document.querySelector(".fa-briefcase");
      icon.style.fontSize = "2rem";
      icon.style.color = "white";
    },
    onEnterBack: () => {
      const icon = document.querySelector(".fa-briefcase");
      icon.style.fontSize = "1.5rem";
      icon.style.color = "#2E86C1";
    },
  },
});
// Animation for cogs icon
gsap.to(".fa-cogs", {
  y: 2270,
  delay: 2,
  duration: 20,
  rotate: 360,
  scrollTrigger: {
    trigger: ".fa-cogs",
    start: "bottom+=1000 center",
    end: "bottom+=1100 center",
    scrub: 3,
    onLeave: () => {
      const icon = document.querySelector(".fa-cogs");
      icon.style.fontSize = "2rem";
      icon.style.color = "white";
    },
    onEnterBack: () => {
      const icon = document.querySelector(".fa-cogs");
      icon.style.fontSize = "1.5rem";
      icon.style.color = "#28B463";
    },
  },
});
// Animation for code icon
gsap.to(".code-icon", {
  x: -600,
  y: 2850,
  duration: 30,
  delay: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: ".code-icon",
    start: "bottom+=1500 center",
    end: "bottom+=1600 center",
    scrub: 3,
    onLeave: () => {
      const icon = document.querySelector(".code-icon");
      icon.style.fontSize = "2rem";
      icon.style.color = "white";
    },
    onEnterBack: () => {
      const icon = document.querySelector(".code-icon");
      icon.style.fontSize = "1.5rem";
      icon.style.color = "#F1C40F";
    },
  },
});
// Animation for certificate icon
gsap.to(".fa-certificate", {
  x: -700,
  y: 4050,
  duration: 18,
  delay: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: ".fa-certificate",
    start: "bottom+=2000 center",
    end: "bottom+=2100 center",
    scrub: 3,
    onLeave: () => {
      const icon = document.querySelector(".fa-certificate");
      icon.style.fontSize = "2rem";
      icon.style.color = "white";
    },
    onEnterBack: () => {
      const icon = document.querySelector(".fa-certificate");
      icon.style.fontSize = "1.5rem";
      icon.style.color = "aqua";
    },
  },
});
// Animation for envelope icon
gsap.to(".fa-envelope", {
  x: -800,
  y: 5970,
  duration: 22,
  delay: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: ".fa-envelope",
    start: "bottom+=2700 center",
    end: "bottom+=2300 center",
    scrub: 3,
    onLeave: () => {
      const icon = document.querySelector(".fa-envelope");
      icon.style.fontSize = "2rem";
      icon.style.color = "white";
    },
    onEnterBack: () => {
      const icon = document.querySelector(".fa-envelope");
      icon.style.fontSize = "1.5rem";
      icon.style.color = "#E74C3C";
    },
  },
});

//Navbar Icons GSAP Animation For 1024px
const mm = gsap.matchMedia();
mm.add("(min-width: 1024px)", () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".icon-scroll",
      start: "top 0%",
      end: "bottom+=300 center",
      scrub: true,
      onLeave: () => {
        const icon = document.querySelector(".icon-scroll");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".icon-scroll");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "orangered";
      },
    },
  });

  // Animation for user icon
  timeline.to(".icon-scroll", {
    x: 170,
    y: 580,
    duration: 1,
    rotate: 360,
  });

  gsap.to(".icon-scroll", {
    x: 170,
    y: 580,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
      trigger: ".icon-scroll",
      start: "top 0%",
      end: "bottom+=300 center",
      scrub: true,
      onLeave: () => {
        const icon = document.querySelector(".icon-scroll");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".icon-scroll");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "orangered";
      },
    },
  });
  // Animation for briefcase icon
  gsap.to(".fa-briefcase", {
    x: -390,
    y: 1400,
    duration: 6,
    delay: 2,
    rotate: 360,
    scrollTrigger: {
      trigger: ".fa-briefcase",
      start: "bottom+=400 center",
      end: "bottom+=700 center",
      scrub: 3,
      onLeave: () => {
        const icon = document.querySelector(".fa-briefcase");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".fa-briefcase");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "#2E86C1";
      },
    },
  });
  // Animation for cogs icon
  gsap.to(".fa-cogs", {
    y: 2350,
    delay: 2,
    duration: 20,
    rotate: 360,
    scrollTrigger: {
      trigger: ".fa-cogs",
      start: "bottom+=1000 center",
      end: "bottom+=1100 center",
      scrub: 3,
      onLeave: () => {
        const icon = document.querySelector(".fa-cogs");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".fa-cogs");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "#28B463";
      },
    },
  });
  // Animation for code icon
  gsap.to(".code-icon", {
    x: -600,
    y: 2920,
    duration: 30,
    delay: 2,
    rotate: 360,
    scrollTrigger: {
      trigger: ".code-icon",
      start: "bottom+=1500 center",
      end: "bottom+=1600 center",
      scrub: 3,
      onLeave: () => {
        const icon = document.querySelector(".code-icon");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".code-icon");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "#F1C40F";
      },
    },
  });
  // Animation for certificate icon
  gsap.to(".fa-certificate", {
    x: -700,
    y: 4120,
    duration: 18,
    delay: 2,
    rotate: 360,
    scrollTrigger: {
      trigger: ".fa-certificate",
      start: "bottom+=2000 center",
      end: "bottom+=2100 center",
      scrub: 3,
      onLeave: () => {
        const icon = document.querySelector(".fa-certificate");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".fa-certificate");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "aqua";
      },
    },
  });
  // Animation for envelope icon
  gsap.to(".fa-envelope", {
    x: -800,
    y: 6040,
    duration: 22,
    delay: 2,
    rotate: 360,
    scrollTrigger: {
      trigger: ".fa-envelope",
      start: "bottom+=2700 center",
      end: "bottom+=2300 center",
      scrub: 3,
      onLeave: () => {
        const icon = document.querySelector(".fa-envelope");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".fa-envelope");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "#E74C3C";
      },
    },
  });
});

//Navbar Icons GSAP Animation For 1280px
const mn = gsap.matchMedia();
mn.add("(min-width: 1280px)", () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".icon-scroll",
      start: "top 0%",
      end: "bottom+=300 center",
      scrub: true,
      onLeave: () => {
        const icon = document.querySelector(".icon-scroll");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".icon-scroll");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "orangered";
      },
    },
  });

  // Animation for user icons
  timeline.to(".icon-scroll", {
    x: 170,
    y: 580,
    duration: 1,
    rotate: 360,
  });

  gsap.to(".icon-scroll", {
    x: 170,
    y: 630,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
      trigger: ".icon-scroll",
      start: "top 0%",
      end: "bottom+=300 center",
      scrub: true,
      onLeave: () => {
        const icon = document.querySelector(".icon-scroll");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".icon-scroll");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "orangered";
      },
    },
  });
  // Animation for briefcase icons
  gsap.to(".fa-briefcase", {
    x: -390,
    y: 1420,
    duration: 6,
    delay: 2,
    rotate: 360,
    scrollTrigger: {
      trigger: ".fa-briefcase",
      start: "bottom+=400 center",
      end: "bottom+=700 center",
      scrub: 3,
      onLeave: () => {
        const icon = document.querySelector(".fa-briefcase");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".fa-briefcase");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "#2E86C1";
      },
    },
  });
  // Animation for cogs icons
  gsap.to(".fa-cogs", {
    x: 140,
    y: 2350,
    delay: 2,
    duration: 20,
    rotate: 360,
    scrollTrigger: {
      trigger: ".fa-cogs",
      start: "bottom+=1000 center",
      end: "bottom+=1100 center",
      scrub: 3,
      onLeave: () => {
        const icon = document.querySelector(".fa-cogs");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".fa-cogs");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "#28B463";
      },
    },
  });
  // Animation for code icons
  gsap.to(".code-icon", {
    x: -600,
    y: 2870,
    duration: 30,
    delay: 2,
    rotate: 360,
    scrollTrigger: {
      trigger: ".code-icon",
      start: "bottom+=1500 center",
      end: "bottom+=1600 center",
      scrub: 3,
      onLeave: () => {
        const icon = document.querySelector(".code-icon");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".code-icon");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "#F1C40F";
      },
    },
  });
  // Animation for certificate icons
  gsap.to(".fa-certificate", {
    x: -700,
    y: 4080,
    duration: 18,
    delay: 2,
    rotate: 360,
    scrollTrigger: {
      trigger: ".fa-certificate",
      start: "bottom+=2000 center",
      end: "bottom+=2100 center",
      scrub: 3,
      onLeave: () => {
        const icon = document.querySelector(".fa-certificate");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".fa-certificate");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "aqua";
      },
    },
  });
  // Animation for envelope icons
  gsap.to(".fa-envelope", {
    x: -800,
    y: 5990,
    duration: 22,
    delay: 2,
    rotate: 360,
    scrollTrigger: {
      trigger: ".fa-envelope",
      start: "bottom+=2700 center",
      end: "bottom+=2300 center",
      scrub: 3,
      onLeave: () => {
        const icon = document.querySelector(".fa-envelope");
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
      },
      onEnterBack: () => {
        const icon = document.querySelector(".fa-envelope");
        icon.style.fontSize = "1.5rem";
        icon.style.color = "#E74C3C";
      },
    },
  });
});

//Service Card GSAP Animation

const card1Animation=document.querySelector(".card1");
const card2Animation=document.querySelector(".card2");
const card3Animation=document.querySelector(".card3");
const card4Animation=document.querySelector(".card4");
const card5Animation=document.querySelector(".card5");
 
 
     gsap.to(".card1", {
     x: -350,
     duration: 1,
     delay: 1,
     scrollTrigger: {
       trigger: ".card1",
       start: "top 80%",
       end: "top 50%",
       scrub: 1,
     },
   });

   gsap.to(".card5", {
     x: 350,
     duration: 1,
     delay: 1,
     scrollTrigger: {
       trigger: ".card5",
       start: "top 80%",
       end: "top 50%",
       scrub: 1,
     },
   });

   gsap.to(".card3", {
     y: -300,
     duration: 1,
     delay: 1,
     scrollTrigger: {
       trigger: ".card3",
       start: "top 80%",
       end: "top 50%",
       scrub: 1,
     },
   });

   gsap.to(".card4", {
     y: 300,
     duration: 1,
     delay: 1,
     scrollTrigger: {
       trigger: ".card4",
       start: "top 80%",
       end: "top 50%",
       scrub: 1,
     },
   });
//Service Card GSAP Animation For 1280px  
if (window.matchMedia("(min-width: 1280px)").matches) {
  gsap.to(".card1", {
    x: -450,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".card1",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.to(".card5", {
    x: 450,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".card5",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.to(".card3", {
    y: -280,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".card3",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.to(".card4", {
    y: 280,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".card4",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });
} 
 //Service Card GSAP Animation For 992px 
     if (window.matchMedia("(max-width: 992px)").matches){
  gsap.to(".card1", {
    x: -300,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".card1",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.to(".card5", {
    x: 300,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".card5",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.to(".card3", {
    y: -370,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".card3",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.to(".card4", {
    y: 350,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".card4",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });
    }  
     
   
//Service Card GSAP Animation For Mobile Devices 
     const mobileCard1=document.querySelector(".mobile-card1")
      const mobileCard2=document.querySelector(".mobile-card2")
      const mobileCard3=document.querySelector(".mobile-card3")
      const mobileCard4=document.querySelector(".mobile-card4")

            gsap.to(".mobile-card1", {
           y: 250,
           duration: 1,
           delay: 1,
           scrollTrigger: {
             trigger: ".mobile-card1",
             start: "top 80%",
             end: "top 50%",
             scrub: 1,
           },
         });

         gsap.to(".mobile-card2", {
           y: 500,
           duration: 1,
           delay: 1,
           scrollTrigger: {
             trigger: ".mobile-card2",
             start: "top 80%",
             end: "top 50%",
             scrub: 1,
           },
         });

         gsap.to(".mobile-card3", {
           y: 750,
           duration: 1,
           delay: 1,
           scrollTrigger: {
             trigger: ".mobile-card3",
             start: "top 80%",
             end: "top 50%",
             scrub: 1,
           },
         });

         gsap.to(".mobile-card4", {
           y: 1000,
           duration: 1,
           delay: 1,
           scrollTrigger: {
             trigger: ".mobile-card4",
             start: "top 80%",
             end: "top 50%",
             scrub: 1,
           },
         });
         
 //Project GSAP Scale Up Animation
//Mini Project         
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
      const mask = project.querySelector('.mask');
      const image = project.querySelector('.project-image');
      
      const tl = gsap.timeline({ paused: true })
        .from(image, {
          scale: 2,
          duration: .5
        })
        .to(mask, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: .5
        }, 0)
        .to(mask, {
          scale: 0.95,
          duration: .5,
        });


      image.addEventListener('mouseenter', () => {
        tl.restart();
      });

      image.addEventListener('mouseleave', () => {
        tl.reverse();
      });
    });


    //Main Project
    const mainProjects = document.querySelectorAll('.projects');
    mainProjects.forEach(project => {
      const masks = project.querySelector('.masks');
      const images = project.querySelector(".projects-img");
      
      const tl = gsap.timeline({ paused: true })
        .from(images, {
          scale: 2,
          duration: .5
        })
        .to(masks, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: .5
        }, 0)
        .to(masks, {
          scale: 0.95,
          duration: .5,
        });


      images.addEventListener('mouseenter', () => {
        tl.restart();
      });

      images.addEventListener('mouseleave', () => {
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
        icon.style.backgroundColor = "black";
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
          mapIcon.style.backgroundColor = "black";
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
          envelopeIcon.style.backgroundColor = "black";
          envelopeIcon.style.transition = "all .2s ease-in";
          envelopeName.style.color = "#E74C3C";
        },
      });
    }
  }
}

handleMapAndEnvelopeAnimation();



//Scroll Top Button
const scrollToTopButton = document.getElementById("scrollToTop");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
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



