import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

const hamburgerButtonElement = document.querySelector('#hamburger');
const navLinksElement = document.querySelector('.nav-links');
const mainElement = document.querySelector('main');

hamburgerButtonElement.addEventListener('click', event => {
  navLinksElement.classList.toggle('open');
  event.stopPropagation();
});


mainElement.addEventListener('click', event => {
  navLinksElement.classList.remove('open');
  event.stopPropagation();
})


const restaurants = data.restaurants;

const getRestaurantHTML = (restaurant) => `
<div class="restaurant" tabindex="0">
  <img src="${restaurant.pictureId}" alt="${restaurant.name} pic">
  <div class="res__info">
    <div class="res__rating">
      Rating ${restaurant.rating} <span class="star" aria-label="rating star">&#9733</span>
    </div>
    <h3 class="res__name">${restaurant.name}</h3>
    <p class="res__desc">${restaurant.description.slice(0, 280)}</p>
    <div class="res__city">Kota ${restaurant.city}</div>
  </div>
</div>
`;

let restaurantsHTML = '';
restaurants.forEach(restaurant => {
  restaurantsHTML += getRestaurantHTML(restaurant);
});

const exploreRestaurantElement = document.querySelector('.explore__items');
exploreRestaurantElement.innerHTML = restaurantsHTML;
