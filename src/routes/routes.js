import Welcome from '../pages/welcome';
import Dashboard from '../pages/dashboard';
import Login from '../pages/auth/login';
import NotFound from '../pages/notFound';
import PrivateRoute from './PrivateRoute';
import GuestRoute from './GuestRoute';

export default [
  {
    component: Welcome,
    path: '/',
    exact: true,
    key: 'welcome-page',
  },
  {
    component: Dashboard,
    path: '/dashboard',
    exact: true,
    middleware: ['auth'],
    key: 'dashboard-page',
    router: PrivateRoute,
  },
  {
    component: Login,
    path: '/login',
    exact: true,
    middleware: ['guest'],
    key: 'login-page',
    router: GuestRoute,
  },
  {
    component: NotFound,
    path: '*',
    key: 'not-found-page',
    exact: false,
  },
];
