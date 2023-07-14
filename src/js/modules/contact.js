const contactForm = document.querySelector("[data-contact]");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    elements: { name, email, message },
  } = e.currentTarget;

  if (name.value || email.value || message.value) {
    document.querySelector(".submit-success").classList.toggle("is-hidden");
    document.querySelector("[data-form]").classList.toggle("is-hidden");
  }

  contactForm.reset();
});