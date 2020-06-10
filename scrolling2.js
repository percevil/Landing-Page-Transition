document.addEventListener(
  "DOMContentLoaded",
  () => {
    function animateSgv(id, delay, delayIncrement) {
      const logo = document.getElementById(id);
      const logoPaths = document.querySelectorAll(`#${id} path`);
      delay = delay;
      for (let i = 0; i < logoPath.length; i++) {
        //console.log(logoPaths[i].getTotalLength());
        logoPath[i].style.strokeDasharray = logoPath[i].getTotalLength();
        logoPath[i].style.strokeDashoffset = logoPath[i].getTotalLength();
        logoPath[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
        delay += delayIncrement;
        console.log(delay);
      }
      logo.style.animation = `fill 0.5s ease forwards ${delay}s`;
    }
    animateSgv("logo", 0, 0.5);
  },
  false
);
