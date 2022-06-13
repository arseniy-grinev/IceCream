(() => {
  const toggleBtnIceCream = document.querySelector('.hero__article-btn');

  toggleBtnIceCream.addEventListener('click', toggleVisibility);

  function toggleVisibility() {
    if (this.classList.contains('hero__article-btn')) {
      document
        .querySelector('[data-article-title]')
        .classList.toggle('visually-hidden');
    }
  }
})();
