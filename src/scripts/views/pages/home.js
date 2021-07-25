import RestaurantSource from '../../data/restaurant-source';
import { createLoader, createErrorFetchMessage } from '../templates/restaurant-creator';
import '../../components/restaurant-list';

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
        ${createLoader()}
        <restaurant-list class="explore__items" id="explore-restaurants"></restaurant-list>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantsList();
    const loader = document.querySelector('#loader');
    loader.style.display = 'none';

    if (!restaurants) {
      const restaurantListElm = document.querySelector('#explore-restaurants');
      restaurantListElm.innerHTML = createErrorFetchMessage();
      return;
    }

    const restaurantList = document.querySelector('restaurant-list');
    restaurantList.restaurants = restaurants;
  },
};

export default Home;
