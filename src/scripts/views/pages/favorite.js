import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplate } from '../templates/restaurant-creator';

const Favorite = {
  async render() {
    return `
      <section id="favorite">
        <h2>Favorite Restaurants</h2>
        <div class="explore__items" id="favorites"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    const exploreRestaurantElement = document.querySelector('#favorites');

    if (restaurants.length !== 0) {
      restaurants.forEach((restaurant) => {
        exploreRestaurantElement.innerHTML += createRestaurantTemplate(restaurant);
      });
    } else {
      exploreRestaurantElement.innerHTML = `
        <div class="no-results" style="text-align: center;">
          <p>No favorite restaurant yet</p>
        </div>
      `;
    }
  },
};

export default Favorite;
