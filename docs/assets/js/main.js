"use strict";const toSearch=document.getElementById("search__text"),searchButton=document.querySelector(".search__btn"),destination=document.querySelector(".result__list");let savedSeries=[];function search(){fetch(`http://api.tvmaze.com/search/shows?q=${toSearch.value}`).then(e=>e.json()).then(e=>{destination.innerHTML="";for(let t of e){let e;t.show.image?t.show.image.medium&&(e=t.show.image.medium):e="https://via.placeholder.com/210x295/cccccc/666666/?text=TV",destination.innerHTML+=`\n        <div class="result__item--container">\n          <i class="favourite__icon fas fa-heart"></i>\n          <li class="result__item nofavourite__item" data-id="${t.show.id}">\n            <img class="result__item--image" src="${e}" alt="${t.show.name}">\n            <p class="result__item--title">${t.show.name}</p>\n          </li>\n        </div>`,(()=>{localStorage.setItem("lovedSeries",JSON.stringify(savedSeries));let e=JSON.parse(localStorage.getItem("lovedSeries"));if(console.log(e),null===savedSeries)savedSeries=[];else{let e=parseInt(t.show.id),s=document.querySelectorAll("result__item");!0===savedSeries.includes(e)&&(s.classList.add("favorite__item"),s.classList.remove("nofavourite__item"))}})()}})}searchButton.addEventListener("click",search);const addFavorite=e=>{e.currentTarget.classList.toggle("favorite__item");const t=document.querySelector(".result__item").id,s=parseInt(t).innerHTML;savedSeries.includes(s)?savedSeries.splice(savedSeries.indexOf(s),1):(savedSeries.push(s),addFavorite()),localStorage.setItem("series",JSON.stringify(savedSeries))},headerText=document.querySelector(".page__header");headerText.innerHTML='<h1 class="header__text">Buscador de series</h1>',toSearch.setAttribute("placeholder","buscador");