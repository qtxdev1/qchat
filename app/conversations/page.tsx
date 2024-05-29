'use client';

import React from 'react';
import clsx from 'clsx';
import useConversation from '@/app/hooks/useConversation';
import EmptyState from '@/app/components/EmptyState';

type Props = {}

const Home: React.FC<Props> = props => {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx(
        `lg:pl-80 h-full lg:block`,
        isOpen ? 'block' : 'hidden'
      )}
    >
      <EmptyState />
    </div>
  );
};

export default Home;