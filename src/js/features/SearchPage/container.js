import { connect } from 'react-redux';
import Page from './page';

const mapStateToProps = (state) => {
  const {
    ...props
  } = state.Search;
  return {
    ...props
  };
};

export default connect(mapStateToProps, null)(Page);
