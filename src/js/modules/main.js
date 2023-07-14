const refs = {
  openContactModal: document.querySelector("[data-modal-open]"),
  closeContactModal: document.querySelector("[data-modal-close]"),
  contactBackdrop: document.querySelector("[data-contactBackdrop]"),

  openModalBtn2: document.querySelectorAll("[data-modal-open2]"),
  closeModalBtn2: document.querySelectorAll("[data-modal-close2]"),
  modal2: document.querySelector("[data-modal2]"),

  openModalBtn3: document.querySelectorAll("[data-modal-open3]"),
  closeModalBtn3: document.querySelectorAll("[data-modal-close3]"),
  modal3: document.querySelector("[data-modal3]"),

  openModalBtn4: document.querySelector("[data-modal-open4]"),
  closeModalBtn4: document.querySelector("[data-modal-close4]"),
  modal4: document.querySelector("[data-modal4]"),

  // openModalBtn5: document.querySelector("[data-modal-open5]"),
  // closeModalBtn5: document.querySelector("[data-modal-close5]"),
  // modal5: document.querySelector("[data-modal5]"),

};

// =============== Contact modal =================

refs.openContactModal.addEventListener("click", toggleContactModal);
refs.closeContactModal.addEventListener("click", toggleContactModal);

function toggleContactModal() {
  refs.contactBackdrop.classList.toggle("is-hidden");

  // toggle content in contact modal
  document.querySelector(".submit-success").classList.add("is-hidden");
  document.querySelector("[data-form]").classList.remove("is-hidden");
}

refs.openModalBtn2.forEach((openBtn) => {
  openBtn.addEventListener("click", toggleModal2);
});
refs.closeModalBtn2.forEach((closeBtn) => {
  closeBtn.addEventListener("click", toggleModal2);
});

refs.openModalBtn3.forEach((openBtn) => {
  openBtn.addEventListener("click", toggleModal3);
});
refs.closeModalBtn3.forEach((closeBtn) => {
  closeBtn.addEventListener("click", toggleModal3);
});




refs.openModalBtn4.addEventListener("click", toggleModal4);
refs.closeModalBtn4.addEventListener("click", toggleModal4);

// refs.openModalBtn5.addEventListener("click", toggleModal5);
// refs.closeModalBtn5.addEventListener("click", toggleModal5);


function toggleModal2() {
  refs.modal2.classList.toggle("is-hidden");
}

function toggleModal3() {
  refs.modal3.classList.toggle("is-hidden");
}

function toggleModal4() {
  refs.modal4.classList.toggle("is-hidden");
}

// function toggleModal5() {
//   refs.modal5.classList.toggle("is-hidden");
// }
