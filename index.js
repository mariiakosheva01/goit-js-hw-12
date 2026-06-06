import{a as m,S as p,i as l}from"./assets/vendor-BezXTN6Z.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="56144354-a08717fc8df2b40204429c095",h="https://pixabay.com/api/";function y(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"};return m.get(h,{params:r}).then(s=>s.data)}const a=document.querySelector(".gallery"),c=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(o){if(!a)return;const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <div class="info-container">
          <div class="info-item"><b>Likes</b><span>${t}</span></div>
          <div class="info-item"><b>Views</b><span>${n}</span></div>
          <div class="info-item"><b>Comments</b><span>${u}</span></div>
          <div class="info-item"><b>Downloads</b><span>${d}</span></div>
        </div>
      </li>
    `).join("");a.insertAdjacentHTML("beforeend",r),b.refresh()}function L(){a&&(a.innerHTML="")}function S(){c&&c.classList.add("is-visible")}function w(){c&&c.classList.remove("is-visible")}const f=document.querySelector(".form");f&&f.addEventListener("submit",P);function P(o){o.preventDefault();const r=o.currentTarget,s=r.elements["search-text"].value.trim();if(s===""){l.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}L(),S(),y(s).then(i=>{if(!i.hits||i.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(i.hits)}).catch(i=>{l.error({title:"Error",message:`Something went wrong: ${i.message}`,position:"topRight"})}).finally(()=>{w(),r.reset()})}
//# sourceMappingURL=index.js.map
