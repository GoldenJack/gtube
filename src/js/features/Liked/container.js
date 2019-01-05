import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getLikedVideos
} from './redux-store';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    accessToken,
    readyAuth
  } = state.Auth;
  const {
    videosLiked,
    readyLiked,
    error
  } = state.Liked;
  return {
    accessToken,
    readyAuth,
    videosLiked,
    readyLiked,
    error
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    getLikedVideos
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
