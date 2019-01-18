import { combineReducers } from 'redux';
import Auth from 'features/Auth/redux-store';
import Home from 'features/Home/redux-store';
import Trending from 'features/Trending/redux-store';
import Liked from 'features/Liked/redux-store';
import Video from 'features/Video/redux-store';
import Search from 'features/SearchPage/redux-store';
import Subscriptions from 'features/Subscriptions/redux-store';
import Channel from 'features/Channel/redux-store';

export default combineReducers({
  Auth,
  Home,
  Channel,
  Trending,
  Liked,
  Subscriptions,
  Video,
  Search
});
