import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Button, Icon } from 'atoms';
import { Field } from 'molecules';

const cn = bemHelper('search');

export const Search = ({
  mix,
  onChange,
  value
}) => {
  return (
    <div {...cn('', '', mix)}>
      <Field mix={cn('field').className} onChange={onChange} value={value} />
      <Button mix={cn('button').className} view="pink">
        <Icon mix={cn('button-icon').className} icon="microphone" />
      </Button>
    </div>
  );
};

Search.propTypes = {
  mix: T.string,
  onChange: T.func.isRequired,
  value: T.string
};

Search.defaultProps = {
  mix: '',
  value: ''
};
