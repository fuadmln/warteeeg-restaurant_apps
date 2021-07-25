import './searched-restaurant';

class SearchedRestaurantList extends HTMLElement {
  connectedCallback() {
    this.className = 'results';
    this.id = 'searchResult';
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;

    if (restaurants.length) this.render();
    else this.renderEmpty();
  }

  render() {
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('searched-restaurant');
      restaurantItemElement.restaurant = restaurant;
      this.appendChild(restaurantItemElement);
    });
  }

  renderEmpty() {
    this.innerHTML = `
      <div class="no-results">
        <p><b>your search didn't match any :(</b></p>
        <br>
        <p>Try different keywords or<br>try fewer keywords.</p>
      </div>`;
  }
}

customElements.define('searched-restaurant-list', SearchedRestaurantList);
