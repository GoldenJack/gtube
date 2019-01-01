import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'store/rootReducer';
import { api } from './api';


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument(api)))
);
