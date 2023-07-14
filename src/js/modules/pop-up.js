(() => {
  const closeModalBtn = document.querySelector("[data-modal-close7]");
  const modalBackdrop = document.querySelector("[data-modal7]");

  closeModalBtn.addEventListener("click", (e) => {
    modalBackdrop.classList.add("is-hidden");
  });
})();
