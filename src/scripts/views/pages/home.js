import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantTemplate, createLoader } from '../templates/restaurant-creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron">
        <h2>Five Star <span class="text-secondary">Taste</span>,</h2>
        <h2>Street Food <span class="text-primary">Prices</span>.</h2>
        <p>Warteeeg yang e-nya tiga.</p>
    </div>

    <section class="explore">
        <h2>Explore Restaurant</h2>
        <div class="explore__items">
          ${createLoader()}
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantsList();
    const exploreRestaurantElement = document.querySelector('.explore__items');
    const loader = document.querySelector('#loader');
    loader.style.display = 'none';

    restaurants.forEach((restaurant) => {
      exploreRestaurantElement.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default Home;
