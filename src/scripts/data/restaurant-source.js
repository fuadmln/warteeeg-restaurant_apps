import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  static async restaurantsList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async searchReastaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheMovieDbSource;
