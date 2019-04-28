import React, { Component } from 'react';
import T from 'prop-types';
import microphoneSVG from 'img/icons/microphone.svg';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Button, Icon } from 'atoms';
import { Field } from 'molecules';

const cn = bemHelper('search');

export const Search = ({
  mix,
  history,
}) => {
  return (
    <div {...cn('', '', mix)}>
      <Field mix={cn('field').className} />
      <Button mix={cn('button').className} view="pink">
        <Icon mix={cn('button-icon').className} icon={microphoneSVG} />
      </Button>
    </div>
  );
};

Search.propTypes = {
  mix: T.string,
};

Search.defaultProps = {
  mix: ''
};
