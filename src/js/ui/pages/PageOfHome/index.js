import React from 'react';
import T from 'prop-types';

import { Title, Wrapper } from 'atoms';
import { WithPreloader } from 'molecules';
import { Category } from 'organisms';

export const PageOfHome = ({
  data,
  fetchStatus
}) => {
  const renderCategories = () => {
    if (data.length === 0) return null;
    return data.map(category => {
      return (
        <Category videos={category.items} />
      );
    });
  };

  return (
    <Wrapper>
      <WithPreloader fetchStatus={fetchStatus}>
        <Title type="h4">Домашняя страница</Title>
        {renderCategories()}
      </WithPreloader>
    </Wrapper>
  );
};

PageOfHome.propTypes = {
  data: T.array.isRequired,
  fetchStatus: T.string.isRequired
};
