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

      if (name.value && review.value) {
        console.log('bisa dikirim');
        const reviewData = {
          id: url.id,
          name: name.value,
          review: review.value,
        };

        const postResponse = await RestaurantSource.postRestaurantReview(reviewData);
        console.log(postResponse);
        if (postResponse.status === 200) {
          console.log('berhasil kirim');
          form.reset();
        } else {
          console.log('can\'t sent review, error has been occured');
        }
      } else {
        console.log('lengkapi data');
      }
    });
  },
};

export default Detail;
