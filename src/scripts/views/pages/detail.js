import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetail,
  createMenuSection,
  createReviewSection,
  createLoader,
} from '../templates/restaurant-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="detail" id="detail"></div>
      <section class="menu" id="menu">${createLoader()}</section>
      <section class="review-section" id="review"></section>
      <div id="like-button-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);

    if (!restaurant) {
      const main = document.querySelector('#main');
      main.innerHTML = `
        <div id='no-connection' style="text-align: center; font-weight: bold; padding: 12px">
          FAILED TO FETCH
          <br>
          Check your internet connection
        </div>`;
      return;
    }

    const detailContainer = document.querySelector('#detail');
    const menuContainer = document.querySelector('#menu');
    const reviewContainer = document.querySelector('#review');

    detailContainer.innerHTML = createRestaurantDetail(restaurant);
    menuContainer.innerHTML = createMenuSection(restaurant);
    reviewContainer.innerHTML = createReviewSection(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like-button-container'),
      restaurant: restaurant.restaurant,
    });

    const form = document.querySelector('#post-review');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.querySelector('#comment-name');
      const review = document.querySelector('#review-comment');
      const formMessage = document.querySelector('#form-message');

      if (name.value && review.value) {
        const reviewData = {
          id: url.id,
          name: name.value,
          review: review.value,
        };

        const postResponse = await RestaurantSource.postRestaurantReview(reviewData);

        if (postResponse.status === 200) {
          form.reset();
          formMessage.innerHTML = 'Review succesfully posted';
          formMessage.style.color = 'green';
        } else {
          formMessage.innerHTML = 'Can\'t sent review, error has been occured';
          formMessage.style.color = 'red';
        }
      } else {
        formMessage.innerHTML = 'Name and review required to fill';
        formMessage.style.color = 'red';
      }
    });
  },
};

export default Detail;
