import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import data from './data/DATA.json';
import { createRestaurantTemplate } from './views/templates/restaurant-creator';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main'),
});

const { restaurants } = data;

const exploreRestaurantElement = document.querySelector('.explore__items');
restaurants.forEach((restaurant) => {
  exploreRestaurantElement.innerHTML += createRestaurantTemplate(restaurant);
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
