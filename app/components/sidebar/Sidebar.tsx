import React from 'react';
import DesktopSidebar from './DesktopSidebar';
import MobileFooter from './MobileFooter';

type Props = {
  children: React.ReactNode,
}

const Sidebar: React.FC<Props> = ({
  children
}) => {

  return (
    <div className='h-full'>
      <DesktopSidebar />
      <MobileFooter />
      <main className='lg:pl-20 h-full'>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;