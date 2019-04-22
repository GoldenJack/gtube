import React, { useCallback } from 'react';
import T from 'prop-types';

import { Wrapper } from 'atoms';
import { Caption, WithPreloader } from 'molecules';
import { Category } from 'organisms';

export const PageOfHome = ({
  fetchStatus,
  data,
  ...props
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
        <Caption type="h4" title="Домашняя страница" />
        {renderCategories()}
      </WithPreloader>
    </Wrapper>
  );
};

PageOfHome.propTypes = {
  fetchStatus: T.string.isRequired,
  categories: T.array.isRequired
};
