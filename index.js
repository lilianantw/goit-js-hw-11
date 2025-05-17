import{a as f,S as m,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const p="49351008-1bfee9cf32a9c846c40651839",g="https://pixabay.com/api/";function h(t){const o={key:p,q:t,image_type:"photo",orientation:"horizontal",per_page:20,safesearch:!0};return f.get(g,{params:o}).then(r=>r.data.hits.length?r.data.hits:Promise.reject(new Error("No images found"))).catch(r=>Promise.reject(r))}let c;function y(t,o){const r=t.map(w).join("");o.insertAdjacentHTML("beforeend",r),v()}function b(t){t.innerHTML=""}function L(t){t.classList.remove("hidden")}function d(t){t.classList.add("hidden")}function w({webformatURL:t,largeImageURL:o,tags:r,likes:n,views:e,comments:i,downloads:s}){return`
    <li class="gallery-item">
      <a href="${o}">
        <img src="${t}" alt="${r}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${n}</p>
        <p class="info-item"><b>Views:</b> ${e}</p>
        <p class="info-item"><b>Comments:</b> ${i}</p>
        <p class="info-item"><b>Downloads:</b> ${s}</p>
      </div>
    </li>
  `}function v(){c?c.refresh():c=new m(".gallery a",{captionsData:"alt",captionDelay:250})}const P=document.querySelector(".form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader");window.addEventListener("load",()=>{d(l)});P.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.elements["search-text"],r=o.value.trim();if(!r){a.warning({title:"Попередження",message:"Введіть пошуковий запит!",position:"topRight"});return}b(u),L(l);try{const n=await h(r);if(n.length===0){a.error({title:"Помилка",message:"Зображення не знайдено",position:"topRight"});return}y(n,u)}catch{a.error({title:"Помилка",message:"Не вдалося завантажити зображення",position:"topRight"})}finally{o.value="",d(l)}});
//# sourceMappingURL=index.js.map
