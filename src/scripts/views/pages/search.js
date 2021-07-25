import { createLoader } from '../templates/restaurant-creator';
import '../../components/search-bar';

const Search = {
  async render() {
    return `
      <search-bar></search-bar>
      ${createLoader()}
    `;
  },

  async afterRender() {
    const loader = document.querySelector('#loader');
    loader.style.display = 'none';
  },
};

export default Search;
