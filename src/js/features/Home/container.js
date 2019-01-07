import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getHomeData
} from './redux-store/home';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    accessToken,
    readyAuth
  } = state.Auth;
  const {
    home,
    readyHome,
    error
  } = state.Home;
  return {
    accessToken,
    readyAuth,
    home,
    readyHome,
    error
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    getHomeData
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
