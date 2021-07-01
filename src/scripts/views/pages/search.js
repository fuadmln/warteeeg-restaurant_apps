import RestaurantSource from '../../data/restaurant-source';
import { createSearchResults } from '../templates/restaurant-creator';

const Search = {
  async render() {
    return `
      <div class="search-wrapper">
          <div class="search">
            <button name="searchButton" id="searchButton">
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                  </path>
                </svg>
            </button>
            <input type="search" name="query" aria-label="Search through site content"
                placeholder="search by name, category or menu">
          </div>
      </div>
    `;
  },

  async afterRender() {
    const runSearch = async () => {
      const query = document.querySelector("input[name='query']").value;
      const restaurants = await RestaurantSource.searchReastaurant(query);
      const mainContainer = document.querySelector('#main');

      if (document.querySelector('#searchResult')) {
        document.querySelector('h2.search-query').remove();
        document.querySelector('#searchResult').remove();
      }

      mainContainer.insertAdjacentHTML('beforeend', createSearchResults(restaurants));
      // tidak menggunakan innerText karna akan menghilangkan event click

      document.querySelector("input[name='query']").value = query;
      document.querySelector('#search-query').innerText = query;
    };

    const searchButton = document.querySelector('#searchButton');
    searchButton.addEventListener('click', runSearch);

    const searchForm = document.querySelector("input[name='query']");
    searchForm.addEventListener('keypress', async (e) => {
      if (e.key === 'Enter') {
        await runSearch();
      }
    });
  },
};

export default Search;
