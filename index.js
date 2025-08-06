    const lines = [
      "Sign Up to Get 15% Off Your First Purchase. Code: UNLEASH15",
      "Exclusive New User Deal: Chronos 68 Magnetic Keyboard Only $139.99 (Save $40-$60!)"
    ];

    let currentIndex = 0;
    const textElement = document.getElementById("sliderText");

    function updateText() {
      textElement.style.opacity = 0;
      setTimeout(() => {
        textElement.textContent = lines[currentIndex];
        textElement.style.opacity = 1;
      }, 300);
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % lines.length;
      updateText();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + lines.length) % lines.length;
      updateText();
    }

    // navbar-js
    function toggleDropdown(id) {
    const allSections = document.querySelectorAll('.dropdown-section');

    allSections.forEach(section => {
      if (section.id === id) {
        section.classList.toggle('active');
      } else {
        section.classList.remove('active');
      }
    });
  }
    // navbar-js

    // container-slider

   const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

    // container-slider

// New-Arrivals

// New-Arrivals