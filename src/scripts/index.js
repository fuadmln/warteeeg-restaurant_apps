import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/detail-page.css';
import '../styles/search-page.css';
import '../styles/favorite-page.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
