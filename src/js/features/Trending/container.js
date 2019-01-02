import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getTrendingVideos
} from './redux-store';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    accessToken,
    readyAuth
  } = state.Auth;
  const {
    trending
  } = state.Trending;
  return {
    accessToken,
    readyAuth,
    trending
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    getTrendingVideos
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
