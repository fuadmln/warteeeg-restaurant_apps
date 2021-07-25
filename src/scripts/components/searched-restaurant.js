// restaurant search result element
class SearchedRestaurant extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="restaurant" tabindex="0">
      <div class="image">
        <img src="https://restaurant-api.dicoding.dev/images/small/${this._restaurant.pictureId}" crossorigin="anonymous" alt="${this._restaurant.name}">
        <div class="rating">${this._restaurant.rating}<span class="star" aria-label="rating star">★</span></div>
      </div>
      <div class="info">
        <h3><a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h3>
        
        <p>${this._restaurant.city} City</p>
        <p class="desc">${this._restaurant.description}
        </p>
      </div>
    </div>`;
  }
}

customElements.define('searched-restaurant', SearchedRestaurant);
