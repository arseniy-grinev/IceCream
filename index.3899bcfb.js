!function(){"use strict";var e=document.querySelectorAll('a[href*="#"]'),t=!0,o=!1,l=void 0;try{for(var n,r=function(e,t){var o=t.value;o.addEventListener("click",(function(e){console.log("click"),e.preventDefault();var t=o.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))},a=e[Symbol.iterator]();!(t=(n=a.next()).done);t=!0)r(0,n)}catch(e){o=!0,l=e}finally{try{t||null==a.return||a.return()}finally{if(o)throw l}}!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=index.3899bcfb.js.map
