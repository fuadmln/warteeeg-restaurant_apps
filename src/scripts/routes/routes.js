import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/search': Search,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
