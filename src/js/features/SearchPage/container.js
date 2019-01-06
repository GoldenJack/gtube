import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getSearch
} from './redux-store';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    ...props
  } = state.Search;
  return {
    ...props
  }
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    getSearch
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
