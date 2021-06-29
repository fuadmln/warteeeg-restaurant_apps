import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantTemplate = (restaurant) => `
  <div class="restaurant" tabindex="0">
    <img src="${API_ENDPOINT.BASE_IMAGE_URL.small(restaurant.pictureId)}" alt="${restaurant.name}">
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
  const { restaurant } = restaurantData;

  // categories to string, ex: 'Italia, Modern'
  const categories = () => {
    const arr = [];
    restaurant.categories.forEach((category) => {
      arr.push(category.name);
    });
    return arr.join(', ');
  };

  return `
  <div class="restaurant">
    <img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="nama res">
    <div class="res__info">
      <h2 class="res__name">${restaurant.name}</h2>
      <p class="res__desc">${restaurant.description}</p>
    </div>
    <ul class="info-list">
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
  const { restaurant } = restaurantData;

  const foodList = () => {
    let foods = '';
    restaurant.menus.foods.forEach((food) => {
      foods += `<li>${food.name}</li>`;
    });
    return foods;
  };

  const drinkList = () => {
    let drinks = '';
    restaurant.menus.drinks.forEach((drink) => {
      drinks += `<li>${drink.name}</li>`;
    });
    return drinks;
  };

  return `
    <h2>Menus</h2>
    <div class="foods">
      <h3>Foods</h3>
      <ul>
        ${foodList()}
      </ul>
    </div>
    <div class="drinks">
      <h3>Drinks</h3>
      <ul>
        ${drinkList()}       
      </ul>
    </div>
  `;
};

const createReviewSection = (restaurantData) => {
  const { restaurant } = restaurantData;
  const reviews = () => {
    let reviewsElement = '';
    restaurant.customerReviews.forEach((review) => {
      reviewsElement += `
      <div class="review">
        <div class="review__name">${review.name}</div>
        <div class="review__date">${review.date}</div>
        <div class="review__comment">
        ${review.review}
        </div>
      </div>
      `;
    });

    return reviewsElement;
  };

  return `
    <h2>Reviews</h2>
    <div class="reviews">
      ${reviews()}
    </div>
    <div class="add-review">
      <h3>Add review</h3>
      <form action="">
        <input type="text" name="commnet-name" placeholder="your name">
        <textarea name="review-comment" id="review-comment" rows="5"
          placeholder="write your review about this place..."></textarea>
        <button>Post</button>
      </form>
    </div>
  `;
};

export {
  createRestaurantTemplate,
  createRestaurantDetail,
  createMenuSection,
  createReviewSection,
};
