'use client';

import useConversation from '@/app/hooks/useConversation';
import { useRouters } from '@/app/hooks/useRouters';
import React from 'react';
import MobileItem from './MobileItem';

type Props = {}

const MobileFooter: React.FC<Props> = props => {
  const routers = useRouters();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  };

  return (
    <div
      className='
        fixed
        justify-between
        w-full
        bottom-0
        z-40
        flex
        items-center
        bg-white
        border-t-[1px]
        lg:hidden
      '
    >
      {routers.map((item) => (
        <MobileItem
          key={item.label}
          href={item.href}
          icon={item.icon}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;