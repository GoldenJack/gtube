import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Category from 'organisms/Category';
import WithPreloader from 'molecules/WithPreloader';

const cn = bemHelper('home');

class Home extends Component {
  componentDidMount() {
    const { getVideoGategories, readyCategory, readyAuth, accessToken } = this.props;
    !readyCategory && getVideoGategories();
  }

  _renderCategories = () => {
    const { categories } = this.props;
    return categories.items.map(({ id, snippet: { title } }) => (
      <Category
        key={id}
        title={title}
        // description="Original Music Videos featuring music written and produced by Name Namevich"
        // videos={[1, 2, 3, 4, 5]}
      />
    ));
  }

  render() {
    const { readyCategory } = this.props;

    return (
      <div {...cn()}>
        <WithPreloader readyContent={readyCategory}>
          { readyCategory && this._renderCategories() }
        </WithPreloader>
      </div>
    );
  }
}

Home.propTypes = {
  getVideoGategories: T.func.isRequired,
  accessToken: T.string,
  readyCategory: T.bool.isRequired,
  categories: T.object
};

Home.defaultProps = {
  accessToken: '',
  categories: {}
};

export default Home;
