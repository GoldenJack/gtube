import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('input');

class Input extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.currentTarget.value
    });
  }

  render() {
    const { type, mix } = this.props;
    const { value } = this.state;

    return (
      <input
        {...cn('', '', mix)}
        type={type}
        value={value}
        onChange={this.handleChange}
        placeholder="Search..."
      />
    );
  }
}

Input.propTypes = {
  mix: T.string,
  type: T.string.isRequired
};

Input.defaultProps = {
  mix: ''
};

export default Input;
