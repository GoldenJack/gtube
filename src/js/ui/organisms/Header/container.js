import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getSearchList
} from 'features/SearchPage/redux-store';
import UI from './ui';

const mapStateToProps = (state) => {
  const {
    searchQuery
  } = state.Search;
  return {
    searchQuery
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({
    getSearchList
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(UI);
