import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getVideo
} from './redux-store';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    video,
    readyVideo,
    error
  } = state.Video;
  return {
    video,
    readyVideo,
    error
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    getVideo
  }, dispatch);
  return { ...actions };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { match: { params: { videoId } } } = ownProps;
  return {
    videoId,
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Page);
