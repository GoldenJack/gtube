import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getVideoGategories
} from './redux-store/home';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    accessToken,
    readyAuth
  } = state.Auth;
  const {
    categories,
    readyCategory,
    error
  } = state.Home;
  return {
    accessToken,
    readyAuth,
    categories,
    readyCategory,
    error
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    getVideoGategories
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
