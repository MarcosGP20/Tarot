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
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  document.addEventListener("click", function (event) {
    if (!navList.contains(event.target) && event.target !== menuToggle) {
      navList.style.display = "none"; // Ocultar la lista de navegación cuando se hace clic fuera de ella
    }
  });

  menuToggle.addEventListener("click", function () {
    if (navList.style.display === "none") {
      navList.style.display = "block"; // Mostrar la lista de navegación cuando se hace clic en el botón de menú
    } else {
      navList.style.display = "none"; // Ocultar la lista de navegación si ya está visible y se hace clic en el botón de menú nuevamente
    }
  });
});
