import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="restaurant" tabindex="0">
      <img src="${API_ENDPOINT.BASE_IMAGE_URL.small(this._restaurant.pictureId)}" crossorigin="anonymous" alt="${this._restaurant.name}">
      <div class="res__info">
        <div class="res__rating">
          Rating ${this._restaurant.rating} <span class="star" aria-label="rating star">&#9733</span>
        </div>
        <h3 class="res__name"><a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h3>
        <p class="res__desc">${this._restaurant.description.slice(0, 280)}</p>
        <div class="res__city">Kota ${this._restaurant.city}</div>
      </div>
    </div>`;
  }
}

customElements.define('restaurant-item', RestaurantItem);
