import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Title } from 'atoms/Title';
import Icon from 'atoms/Icon';

const cn = bemHelper('card');

export const Card = ({ title, url, icon, setVisibleMenu }) => {
  const triggerClick = () => setVisibleMenu(false);
  return (
    <Link to={url} {...cn()} onClick={triggerClick}>
      <Title type="h6" mix={cn('title').className}>{title}</Title>
    </Link>
  );
};
