(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-location-open]"),
    closeModalBtn: document.querySelector("[data-location-close]"),
    modal: document.querySelector("[data-location]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
   refs.modal.classList.toggle("is-hidden");
   if (!window.menuIsOpened) {
     refs.body.classList.toggle("no-scroll");
   }
 }
})();