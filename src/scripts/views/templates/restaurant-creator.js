import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantTemplate = (restaurant) => `
  <div class="restaurant" tabindex="0">
    <img src="${API_ENDPOINT.BASE_IMAGE_URL.small(restaurant.pictureId)}" crossorigin="anonymous" alt="${restaurant.name}">
    <div class="res__info">
      <div class="res__rating">
        Rating ${restaurant.rating} <span class="star" aria-label="rating star">&#9733</span>
      </div>
      <h3 class="res__name"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p class="res__desc">${restaurant.description.slice(0, 280)}</p>
      <div class="res__city">Kota ${restaurant.city}</div>
    </div>
  </div>
`;

const createRestaurantDetail = (restaurantData) => {
  if (!restaurantData) { return ''; }

  const { restaurant } = restaurantData;

  // categories to string, ex: 'Italia, Modern'
  const categories = () => restaurant.categories.map((category) => category.name).join(', ');

  return `
  <div class="restaurant">
    <img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" crossorigin="anonymous" alt="${restaurant.name}">
    <div class="res__info" tabindex="0">
      <h2 class="res__name">${restaurant.name}</h2>
      <p class="res__desc">${restaurant.description}</p>
    </div>
    <ul class="info-list" tabindex="0">
      <li>
          <span class="label">Rating</span>
          <span class="colon">:</span>
          <span class="value">${restaurant.rating} <span class="star"
                aria-label="rating star">★</span></span>
      </li>
      <li>
          <span class="label">City</span>
          <span class="colon">:</span>
          <span class="value">${restaurant.city}</span>
      </li>
      <li>
          <span class="label">Address</span>
          <span class="colon">:</span>
          <span class="value">${restaurant.address}</span>
      </li>
      <li>
          <span class="label">Category</span>
          <span class="colon">:</span>
          <span class="value">${categories()}</span>
      </li>
    </ul>
  </div>
`;
};

const createMenuSection = (restaurantData) => {
  if (!restaurantData) { return ''; }
  const { restaurant } = restaurantData;
  const foodList = () => restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('');
  const drinkList = () => restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('');

  return `
    <h2 tabindex="0">Menus</h2>
    <div class="foods" tabindex="0">
      <h3>Foods</h3>
      <ul>
        ${foodList()}
      </ul>
    </div>
    <div class="drinks" tabindex="0">
      <h3>Drinks</h3>
      <ul>
        ${drinkList()}       
      </ul>
    </div>
  `;
};

const createReviewSection = (restaurantData) => {
  if (!restaurantData) { return ''; }
  const { restaurant } = restaurantData;

  const reviews = () => restaurant.customerReviews.map((review) => `
      <div class="review">
        <div class="review__name">${review.name}</div>
        <div class="review__date">${review.date}</div>
        <div class="review__comment">
        ${review.review}
        </div>
      </div>`).join('');

  return `
    <h2 tabindex="0">Reviews</h2>
    <div class="reviews" tabindex="0">
      ${reviews()}
    </div>
    <div class="add-review">
      <h3>Add review</h3>
      <div id="form-message" class="form-message"></div>
      <form id="post-review">
        <input type="text" name="commnet-name" id="comment-name" placeholder="your name">
        <textarea name="review-comment" id="review-comment" rows="5"
          placeholder="write your review about this place..."></textarea>
        <button type="submit" aria-label="submit your review">Post</button>
      </form>
    </div>
  `;
};

const createSearchResults = (restaurants) => {
  let results = '';

  if (restaurants.length) {
    results = restaurants.map((restaurant) => `
      <div class="restaurant" tabindex="0">
        <div class="image">
          <img src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" crossorigin="anonymous" alt="${restaurant.name}">
          <div class="rating">${restaurant.rating}<span class="star" aria-label="rating star">★</span></div>
        </div>
        <div class="info">
          <h3><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
          
          <p>${restaurant.city} City</p>
          <p class="desc">${restaurant.description}
          </p>
        </div>
      </div>
    `).join('');
  } else {
    results = `
      <div class="no-results">
        <p><b>your search didn't match any :(</b></p>
        <br>
        <p>Try different keywords or<br>try fewer keywords.</p>
      </div>
    `;
  }

  return `
    <h2 class="search-query">Search result for: <span id="search-query"><span></h2>
    <div class="results" id="searchResult">
      ${results}
    </div>
  `;
};

const createLikeButtonTemplate = () => '<button class="like-btn" aria-label="save to favorite">&#9825;</button>';

const createLikedButtonTemplate = () => '<button class="like-btn" aria-label="unsave to favorite" style="font-size: 36px;">&#9829;</button>';

const createLoader = () => '<div class="loader" id="loader"></div>';

export {
  createRestaurantTemplate,
  createRestaurantDetail,
  createMenuSection,
  createReviewSection,
  createSearchResults,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createLoader,
};
