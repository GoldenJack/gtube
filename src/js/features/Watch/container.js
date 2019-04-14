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
  } = state.Watch;
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
