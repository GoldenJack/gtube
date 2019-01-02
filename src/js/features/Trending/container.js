import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getTrendingVideos
} from './redux-store';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    trending,
    readyTrending,
    error
  } = state.Trending;
  return {
    trending,
    readyTrending,
    error
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    getTrendingVideos
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
