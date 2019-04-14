import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  initGoogleApi,
  signIn,
  logout
} from 'features/Auth/redux-store';
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
  return {
    googleApi,
    googleApiError,
    accessToken,
    userInfo,
    authError,
    readyAuth,
    ...props
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    initGoogleApi,
    signIn,
    logout
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
