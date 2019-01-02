import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  initGoogleApi,
  signIn
} from 'features/Auth/redux-store/auth';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    googleApi,
    googleApiError,
    accessToken,
    userInfo,
    authError,
    readyAuth
  } = state.Auth;
  return {
    googleApi,
    googleApiError,
    accessToken,
    userInfo,
    authError,
    readyAuth
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    initGoogleApi,
    signIn
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
