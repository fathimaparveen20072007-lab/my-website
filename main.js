  // ============================
  // Preloader Balloon Animation
  // ============================
  window.addEventListener('load', function() {
    const ball = document.querySelector('.ball');
    const image = document.querySelector('.balloon-image');
    const preloader = document.getElementById('preloader');

    // Pop balloon after 1.5s
    setTimeout(() => {
      ball.classList.add('pop');
    }, 1500);

    // Show image after pop
    setTimeout(() => {
      image.classList.add('show-image');
    }, 2100);

    // Hide preloader after image shows
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.transition = 'opacity 0.5s ease';
      setTimeout(() => preloader.style.display = 'none', 500);
    }, 3000);
  });

  // ============================
  // Confetti Effect on Shop Button
  // ============================
  document.getElementById("shopBtn").addEventListener("click", function () {
    for (let i = 0; i < 25; i++) {
      let confetti = document.createElement("div");
      confetti.style.position = "fixed";
      confetti.style.width = "8px";
      confetti.style.height = "8px";
      confetti.style.background = "#fef200";
      confetti.style.top = "50%";
      confetti.style.left = "50%";
      confetti.style.borderRadius = "50%";
      confetti.style.zIndex = "9999";
      confetti.style.transition = "all 1s ease-out";
      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.style.transform = `translate(${Math.random() * 500 - 250}px, ${Math.random() * 500 - 250}px)`;
        confetti.style.opacity = "0";
      }, 10);

      setTimeout(() => confetti.remove(), 1000);
    }
  });

  // ============================
  // EmailJS Feedback Form
  // ============================
  
  (function () {
    emailjs.init("XJCG1uVQGEMoNfOWo"); // Your public key
  })();

  document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;

    emailjs.send("service_7t7f1kt", "template_22jtjng", {
      name: form.name.value,
      email: form.email.value,
      rating: form.rating.value,
      message: form.message.value
    })
    .then(function () {
      document.getElementById("successMsg").style.display = "block";
      form.reset();
    })
    .catch(function (error) {
      alert("Failed to send feedback ❌");
      console.error(error);
    });
  });
