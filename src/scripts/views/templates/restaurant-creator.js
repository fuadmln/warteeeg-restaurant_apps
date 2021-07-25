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

const createLikeButtonTemplate = () => '<button class="like-btn" aria-label="save to favorite">&#9825;</button>';

const createLikedButtonTemplate = () => '<button class="like-btn" aria-label="unsave to favorite" style="font-size: 36px;">&#9829;</button>';

const createLoader = () => '<div class="loader" id="loader"></div>';

const createErrorFetchMessage = () => `
  <div id='no-connection' style="text-align: center; font-weight: bold; padding: 12px">
    !! FAILED TO FETCH !!
    <br>
    Check your internet connection
  </div>`;

export {
  createRestaurantDetail,
  createMenuSection,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createLoader,
  createErrorFetchMessage,
};
