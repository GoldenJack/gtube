import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('input');

class Input extends Component {
  handleChange = e => {
    const { onFieldChange } = this.props;
    onFieldChange(e.currentTarget.value);
  }

  handleEnter = e => {
    const { onEnter } = this.props;
    const that = e.currentTarget;
    e.keyCode === 13 && onEnter(that.value);
  }

  render() {
    const { type, mix, onFocus, value } = this.props;
    return (
      <input
        {...cn('', '', mix)}
        type={type}
        value={value}
        onChange={this.handleChange}
        onFocus={onFocus}
        onKeyDown={this.handleEnter}
        placeholder="Search..."
      />
    );
  }
}

Input.propTypes = {
  mix: T.string,
  type: T.string.isRequired,
  onFocus: T.func,
  onEnter: T.func,
  value: T.string.isRequired,
  onFieldChange: T.func.isRequired
};

Input.defaultProps = {
  mix: '',
  onFocus: null,
  onEnter: null
};

export default Input;
