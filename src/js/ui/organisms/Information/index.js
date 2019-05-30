import React, { useState, lazy, Suspense } from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon } from 'atoms';

const Description = lazy(() => import('./Components/Description'));
const Comments = lazy(() => import('./Components/Comments'));
const Suggested = lazy(() => import('./Components/Suggested'));

const cn = bemHelper('information');

export const Information = ({ mix, videoId }) => {
  const [section, setSection] = useState('description');

  const renderSection = () => {
    switch (section) {
      case ('description'): return <Description id={videoId} />;
      case ('comments'): return <Comments id={videoId} />;
      case ('suggested'): return <Suggested id={videoId} />;
      default: return null;
    }
  };

  return (
    <div {...cn('', '', mix)}>
      <div {...cn('menu')}>
        <div
          {...cn('button')}
          onClick={() => setSection('description')}
          role="none"
        >
          <Icon mix={cn('icon').className} icon="information" size="medium" />
        </div>
        <div
          {...cn('button')}
          onClick={() => setSection('comments')}
          role="none"
        >
          <Icon mix={cn('icon').className} icon="comments" size="medium" />
        </div>
        <div
          {...cn('button')}
          onClick={() => setSection('suggested')}
          role="none"
        >
          <Icon mix={cn('icon').className} icon="suggested" size="medium" />
        </div>
      </div>
      <div {...cn('content')}>
        <Suspense fallback={<div>Loading...</div>}>
          { renderSection() }
        </Suspense>
      </div>
    </div>
  );
};
