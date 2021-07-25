import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetail,
  createMenuSection,
  createLoader,
  createErrorFetchMessage,
} from '../templates/restaurant-creator';
import '../../components/post-review-form';
import '../../components/review-list';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="detail" id="detail"></div>

      <section class="menu" id="menu">${createLoader()}</section>

      <section class="review-section" id="review">
        <h2 tabindex="0">Reviews</h2>
        <review-list class="reviews" tabindex="0"></review-list>
        <div class="add-review">
          <h3>Add review</h3>
          <div id="form-message" class="form-message"></div>
          <post-review id="post-review"></post-review>
        </div>
      </section>
      <div id="like-button-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantData = await RestaurantSource.detailRestaurant(url.id);

    if (!restaurantData) {
      const main = document.querySelector('#main');
      main.innerHTML = createErrorFetchMessage();
      return;
    }

    const detailContainer = document.querySelector('#detail');
    const menuContainer = document.querySelector('#menu');
    const reviewListElm = document.querySelector('review-list');
    const form = document.querySelector('#post-review');

    detailContainer.innerHTML = createRestaurantDetail(restaurantData);
    menuContainer.innerHTML = createMenuSection(restaurantData);
    reviewListElm.reviews = restaurantData.restaurant.customerReviews;
    form.url = url;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like-button-container'),
      restaurant: restaurantData.restaurant,
    });
  },
};

export default Detail;
