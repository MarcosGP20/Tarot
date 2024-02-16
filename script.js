document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  mobileMenu.addEventListener("click", function () {
    navList.classList.toggle("active");
  });

  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Mensaje enviado correctamente");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsapp-btn");

  whatsappBtn.addEventListener("click", function () {
    const phoneNumber = "543517962346";
    const message = "Hola, quiero una consulta gratuita.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsapp-btn2");

  whatsappBtn.addEventListener("click", function () {
    const phoneNumber = "543517962346";
    const message = "Hola, quiero una consulta gratuita.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  });
});
