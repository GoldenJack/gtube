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

  getProgress = () => {
    const { getProgress } = this.props;
    this.progress = setTimeout(() => {
      this.setState({
        progress: getProgress()
      });
    }, 100);
  }

  setProgress = (e) => {
    const { setProgress, duration } = this.props;
    const dataClick = e.pageX;
    const widthWindow = window.innerWidth - 11;

    const progressClick = (dataClick / widthWindow) * 100;
    const progress = (duration / 100) * progressClick;

    setProgress(progress);
    this.setState({
      progress: progressClick
    });
  }

  render() {
    const { progress } = this.state;
    const { play, pause } = this.props;

    const progressWidth = {
      width: `${progress}%`
    };

    if (play) {
      this.getProgress();
    } else if (pause) {
      clearTimeout(this.progress);
    }

    return (
      <div {...cn()}>
        <div {...cn('bar')} onClick={this.setProgress} role="none">
          <div {...cn('line')} style={progressWidth} />
        </div>
      </div>
    );
  }
}
Progress.propTypes = {
  mix: T.string,
  play: T.bool.isRequired,
  pause: T.bool.isRequired,
  duration: T.number.isRequired,
  getProgress: T.func.isRequired,
  setProgress: T.func.isRequired
};

Progress.defaultProps = {
  mix: ''
};

export default Progress;
