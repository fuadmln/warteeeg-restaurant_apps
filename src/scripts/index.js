import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from './data/DATA.json';
import { createRestaurantTemplate } from './views/templates/restaurant-creator';

const hamburgerButtonElement = document.querySelector('#hamburger');
const navLinksElement = document.querySelector('.nav-links');
const mainElement = document.querySelector('main');

hamburgerButtonElement.addEventListener('click', (event) => {
  navLinksElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', (event) => {
  navLinksElement.classList.remove('open');
  event.stopPropagation();
});

const { restaurants } = data;

const exploreRestaurantElement = document.querySelector('.explore__items');
restaurants.forEach((restaurant) => {
  exploreRestaurantElement.innerHTML += createRestaurantTemplate(restaurant);
});
