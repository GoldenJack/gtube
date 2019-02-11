import React, { Component } from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import Icon from 'atoms/Icon';
import LikeSVG from './assets/like.svg';
import DisikeSVG from './assets/dislike.svg';
import './style.scss';

const cn = bemHelper('ratio');

class Ratio extends Component {
  state = {
    like: false,
    dislike: false
  }

  render() {
    const { likeCount, dislikeCount } = this.props;
    return (
      <div {...cn()}>
        <div {...cn('icon')}>
          <p>{likeCount}</p>
          <Icon icon={LikeSVG} />
        </div>
        <div {...cn('icon')}>
          <p>{dislikeCount}</p>
          <Icon icon={DisikeSVG} />
        </div>
      </div>
    );
  }
}

export default Ratio;
