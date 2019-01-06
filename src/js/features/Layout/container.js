import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  initGoogleApi,
  signIn,
  logout
} from 'features/Auth/redux-store/auth';
import {
  changeSearch,
  getSearch
} from 'features/SearchPage/redux-store';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    googleApi,
    googleApiError,
    accessToken,
    userInfo,
    authError,
    readyAuth,
    ...props
  } = state.Auth;
  const {
    searchQuery
  } = state.Search;
  return {
    googleApi,
    googleApiError,
    accessToken,
    userInfo,
    authError,
    readyAuth,
    searchQuery,
    ...props
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    initGoogleApi,
    signIn,
    changeSearch,
    getSearch,
    logout
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
