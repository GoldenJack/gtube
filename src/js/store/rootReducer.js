import { combineReducers } from 'redux';
import Liked from 'features/Liked/redux-store';
import Watch from 'features/Watch/redux-store';
import Subscriptions from 'features/Subscriptions/redux-store';

export default combineReducers({
  Liked,
  Subscriptions,
  Watch
});
