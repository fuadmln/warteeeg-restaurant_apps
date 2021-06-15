import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;

// URL
// /review

// Method:
// POST

// Headers
// Content-Type: application/x-www-form-urlencoded | application/json
// X-Auth-Token: YOUR_API_KEY (for test using 12345)
// Body

// Pilih salah satu

// urlencoded :
// id : string
// name : string
// review : string
// JSON: {"id" : string, "name" : string, "review" : string }
