const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const contactForm = document.querySelector(".contact-form");
const formError = document.querySelector(".form-error");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      if (formError) {
        formError.textContent = "Preencha todos os campos obrigatórios antes de enviar.";
        formError.hidden = false;
      }
      contactForm.reportValidity();
      return;
    }

    if (formError) {
      formError.hidden = true;
    }

    alert(
      "Mensagem registrada para demonstração. Para envio real, será necessário integrar o formulário a um serviço de e-mail ou backend."
    );

    contactForm.reset();
  });
}
