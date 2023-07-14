const modalBackdrop = document.querySelector(".modal-backdrop");
const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector(".contact-us-modal__close-btn");
const formSubmit = document.querySelector(".contact-us-modal__submit-button");
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const formMessage = document.querySelector("#message");

const body = document.body;
openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
formSubmit.addEventListener("submit", handleFormSubmit);
modalBackdrop.addEventListener("click", handleBackdropClick);

function toggleModal() {
  modalBackdrop.classList.toggle("is-hidden");
  body.classList.toggle("disable-scroll");
}
function handleBackdropClick(e) {
  if (e.target === e.currentTarget) {
    modalBackdrop.classList.toggle("is-hidden");
    body.classList.toggle("disable-scroll");
  }
}
function handleFormSubmit(e) {
  e.preventDefault();
  modalBackdrop.classList.toggle("is-hidden");
  body.classList.toggle("disable-scroll");
  const queryString =
    "?name=" +
    formName.value +
    "&email=" +
    formEmail.value +
    "&message=" +
    formMessage.value;
  window.location.href = window.location.href + queryString;
}
