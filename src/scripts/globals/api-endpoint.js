import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
  BASE_IMAGE_URL: {
    small: (id) => `${CONFIG.BASE_URL}images/small/${id}`,
    medium: (id) => `${CONFIG.BASE_URL}images/medium/${id}`,
    large: (id) => `${CONFIG.BASE_URL}images/large/${id}`,
  },
  POST_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
