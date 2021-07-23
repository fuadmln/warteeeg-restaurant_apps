import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

const RestaurantSource = {
  async restaurantsList() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (e) {
      return false;
    }
  },

  async searchReastaurant(query) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(query));
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (e) {
      return false;
    }
  },

  async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();
    } catch (e) {
      return false;
    }
  },

  async postRestaurantReview(review) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': `${CONFIG.API_KEY}`,
      },
      body: JSON.stringify(review),
    })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  },
};

export default RestaurantSource;
