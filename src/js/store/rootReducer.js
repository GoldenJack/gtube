import { combineReducers } from 'redux';
import Auth from 'features/Auth/redux-store';
import Liked from 'features/Liked/redux-store';
import Watch from 'features/Watch/redux-store';
import Search from 'features/SearchPage/redux-store';
import Subscriptions from 'features/Subscriptions/redux-store';

export default combineReducers({
  Auth,
  Liked,
  Subscriptions,
  Watch,
  Search
});
