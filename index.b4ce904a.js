const e=document.querySelectorAll('a[href*="#"]');for(let o of e)o.addEventListener("click",(function(e){console.log("click"),e.preventDefault();const t=o.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}));(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.b4ce904a.js.map
