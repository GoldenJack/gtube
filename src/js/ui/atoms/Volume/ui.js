import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('volume');

class Volume extends Component {
  state = {
    volume: 0
  }

  changeVolume = volume => {
    const { setVolume } = this.props;
    const { currentTarget: { value } } = volume;
    this.setState({
      volume: value
    });

    setVolume(value);
  }

  render() {
    const { volume } = this.state;
    return (
      <input type="range" value={volume} onChange={this.changeVolume} />
    );
  }
}
Volume.propTypes = {
  mix: T.string,
  setVolume: T.func.isRequired
};

Volume.defaultProps = {
  mix: ''
};

export default Volume;
