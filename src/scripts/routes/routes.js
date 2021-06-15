import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/search': Search,
  '/detail/:id': Detail,
};

export default routes;
