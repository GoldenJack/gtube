import { combineReducers } from 'redux';
import Auth from 'features/Auth/redux-store/auth';
import Home from 'features/Home/redux-store';
import Trending from 'features/Trending/redux-store';

export default combineReducers({
  Auth,
  Home,
  Trending
});
