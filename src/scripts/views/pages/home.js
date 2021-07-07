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
        <div class="explore__items" id="explore-restaurants">
          ${createLoader()}
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantsList();
    const loader = document.querySelector('#loader');

    if (!restaurants) {
      loader.style.display = 'none';
      const main = document.querySelector('#explore-restaurants');
      main.innerHTML = `
        <div id='no-connection' style="text-align: center; font-weight: bold; padding: 12px">
          FAILED TO FETCH
          <br>
          Check your internet connection
        </div>`;
      return;
    }

    const exploreRestaurantElement = document.querySelector('#explore-restaurants');

    loader.style.display = 'none';

    restaurants.forEach((restaurant) => {
      exploreRestaurantElement.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default Home;
