import React from 'react';
import Sidebar from '@/app/components/sidebar/Sidebar';

type Props = {
  children: React.ReactNode,
}

const UsersLayout: React.FC<Props> = ({
  children,
}) => {

  return (
    <Sidebar>
      <div className='h-full'>
        {children}
      </div>
    </Sidebar>
  );
};

export default UsersLayout;