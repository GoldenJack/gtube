import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('progress');

class Progress extends Component {
  state = {
    progress: 0
  }

  componentWillUnmount() {
    clearTimeout(this.progress);
  }

  getProgressBar = () => {
    const { calcProgress } = this.props;
    this.progress = setTimeout(() => {
      this.setState({
        progress: calcProgress()
      });
    }, 100);
  }


  render() {
    const { progress } = this.state;
    const { play } = this.props;

    const progressWidth = {
      width: `${progress}%`
    };

    if (play) {
      this.getProgressBar();
    }

    return (
      <div {...cn()}>
        <div {...cn('bar')}>
          <div {...cn('line')} style={progressWidth} />
        </div>
      </div>
    );
  }
}
Progress.propTypes = {
  mix: T.string,
  play: T.bool.isRequired,
  calcProgress: T.func.isRequired
};

Progress.defaultProps = {
  mix: ''
};

export default Progress;
