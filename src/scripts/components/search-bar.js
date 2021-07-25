import RestaurantSource from '../data/restaurant-source';
import { createErrorFetchMessage } from '../views/templates/restaurant-creator';
import './searched-restaurant-list';

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();

    const runSearch = async () => {
      const query = document.querySelector("input[name='query']").value;
      const mainContainer = document.querySelector('#main');
      const loader = document.querySelector('#loader');
      const errorContainer = document.querySelector('#error-message');
      const searchResultContainer = document.querySelector('#searchResult');

      loader.style.display = 'block';
      const restaurants = await RestaurantSource.searchReastaurant(query);
      loader.style.display = 'none';

      if (searchResultContainer) {
        document.querySelector('h2.search-query').remove();
        searchResultContainer.remove();
      }

      if (!restaurants) {
        errorContainer.innerHTML = createErrorFetchMessage();
        return;
      }

      errorContainer.innerHTML = '';
      mainContainer.insertAdjacentHTML('beforeend', '<h2 class="search-query">Search result for: <span id="search-query"><span></h2>');
      mainContainer.insertAdjacentHTML('beforeend', '<searched-restaurant-list class="results" id="searchResult"></searched-restaurant-list>');
      // jangan menggunakan innerText karna akan menghilangkan event click

      document.querySelector('#searchResult').restaurants = restaurants;
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
  }

  render() {
    this.innerHTML = `
      <div class="search-wrapper">
          <div class="search">
            <button name="searchButton" id="searchButton" aria-label="run search">
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                  </path>
                </svg>
            </button>
            <input type="search" name="query" aria-label="Search through site content"
                placeholder="search by name, category or menu">
          </div>
          <div id="error-message"></div>
      </div>`;
  }
}

customElements.define('search-bar', SearchBar);
