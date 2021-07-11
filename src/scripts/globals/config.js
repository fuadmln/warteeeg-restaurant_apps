const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  API_KEY: '12345',
  // CACHE_NAME: 'WarteeeegApp-V1',
  CACHE_NAME: new Date().toISOString(), // for develop
  DATABASE_NAME: 'warteg-restaurant-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
