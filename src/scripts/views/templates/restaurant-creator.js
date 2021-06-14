const createRestaurantTemplate = (restaurant) => `
  <div class="restaurant" tabindex="0">
    <img src="${restaurant.pictureId}" alt="${restaurant.name} pic">
    <div class="res__info">
      <div class="res__rating">
        Rating ${restaurant.rating} <span class="star" aria-label="rating star">&#9733</span>
      </div>
      <h3 class="res__name">${restaurant.name}</h3>
      <p class="res__desc">${restaurant.description.slice(0, 280)}</p>
      <div class="res__city">Kota ${restaurant.city}</div>
    </div>
  </div>
`;

export { createRestaurantTemplate };