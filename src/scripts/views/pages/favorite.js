import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../../components/restaurant-list';

const Favorite = {
  async render() {
    return `
      <section id="favorite">
        <h2>Favorite Restaurants</h2>
        <restaurant-list class="explore__items" id="favorites"></restaurant-list>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoritesContainer = document.querySelector('#favorites');

    if (restaurants.length) {
      favoritesContainer.restaurants = restaurants;
    } else {
      favoritesContainer.innerHTML = `
        <div class="no-results" style="text-align: center;">
          <p>No favorite restaurant yet</p>
        </div>
      `;
    }
  },
};

export default Favorite;
