import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getSubscriptions
} from './redux-store';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    accessToken,
    readyAuth,
    userInfo
  } = state.Auth;
  const {
    subscriptions,
    readySub,
    error
  } = state.Subscriptions;
  return {
    accessToken,
    readyAuth,
    userInfo,
    subscriptions,
    readySub,
    error
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    getSubscriptions
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
