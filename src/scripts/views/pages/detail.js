import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetail,
  createMenuSection,
  createReviewSection,
} from '../templates/restaurant-creator';

const Detail = {
  async render() {
    return `
      <div class="detail" id="detail"></div>
      <section class="menu" id="menu"></section>
      <section class="review-section" id="review"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);

    const detailContainer = document.querySelector('#detail');
    const menuContainer = document.querySelector('#menu');
    const reviewContainer = document.querySelector('#review');

    detailContainer.innerHTML = createRestaurantDetail(restaurant);
    menuContainer.innerHTML = createMenuSection(restaurant);
    reviewContainer.innerHTML = createReviewSection(restaurant);
  },
};

export default Detail;
