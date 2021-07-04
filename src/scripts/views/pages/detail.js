import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetail,
  createMenuSection,
  createReviewSection,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../templates/restaurant-creator';

const Detail = {
  async render() {
    return `
      <div class="detail" id="detail"></div>
      <section class="menu" id="menu"></section>
      <section class="review-section" id="review"></section>
      <div id="like-button-container"></div>
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

    const likeButtonContainer = document.querySelector('#like-button-container');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
