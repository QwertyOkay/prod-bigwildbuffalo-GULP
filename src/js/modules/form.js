(() => {
  const form = document.querySelector("[data-register]");
  const registrationModalBackdrop = document.querySelector("[data-backdrop]");

  // Show formData and close modal by submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    toggleRegistrationModal();

    form.reset();

    document.getElementById("gameFrame").src =
      "https://asccw.playngonetwork.com/casino/ContainerLauncher?pid=2&gid=annihilator&lang=en_GB&practice=1&channel=desktop&demo=2";
  });

  function toggleRegistrationModal() {
    registrationModalBackdrop.classList.toggle("is-hidden");
  }

  // Hide modal by click on backdrop
  registrationModalBackdrop.addEventListener("click", hideModalWindowOnBlur);

  function hideModalWindowOnBlur(e) {
    if (e.target === e.currentTarget) {
      toggleRegistrationModal();
    }
  }
})();
