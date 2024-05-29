import React from 'react';
import getUser from '@/app/actions/getUsers';
import Sidebar from '@/app/components/sidebar/Sidebar';
import UserList from '../components/UserList';

type Props = {
  children: React.ReactNode,
}

const UsersLayout: React.FC<Props> = async ({
  children,
}) => {
  const users = await getUser();

  return (
    <Sidebar>
      <div className='h-full'>
        <UserList items={users!} />
        {children}
      </div>
    </Sidebar>
  );
};

export default UsersLayout;