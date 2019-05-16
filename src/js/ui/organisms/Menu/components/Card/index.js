import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon, Title } from 'atoms';

const cn = bemHelper('card');

export const Card = ({ title, url, icon }) => {
  return (
    <Link to={url} {...cn()}>
      <Icon size="large" mix={cn('icon').className} icon={icon} fill="white" />
      <Title type="h6" mix={cn('title').className}>{title}</Title>
    </Link>
  );
};

Card.propTypes = {
  title: T.string.isRequired,
  url: T.string.isRequired,

};
