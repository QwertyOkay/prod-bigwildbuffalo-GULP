(() => {
  const buttons = document.querySelectorAll(".btn__cookies");
  const privacyPolicyLinks = document.querySelectorAll("[data-modal-open4]");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cookieBar = document.querySelector(".cookiebar");
      cookieBar.style.display = "none";
    });
  });

  privacyPolicyLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
})();
