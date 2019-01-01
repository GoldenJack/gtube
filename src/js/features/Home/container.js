import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    accessToken
  } = state.Auth;
  return {
    accessToken
  };
};

export default connect(mapStateToProps, null)(Page);
