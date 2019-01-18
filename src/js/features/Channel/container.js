import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getChannel
} from './redux-store';
import Page from './page';

const mapStateToProps = (state, ownProps) => {
  const {
    accessToken,
    readyAuth
  } = state.Auth;
  const {
    ...props
  } = state.Channel;
  const { match: { params: { channelId } } } = ownProps;
  return {
    accessToken,
    readyAuth,
    channelId,
    ...props
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    getChannel
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
