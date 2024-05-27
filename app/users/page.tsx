'use client';

import React from 'react';
import { signOut } from 'next-auth/react';

type Props = {}

const Users: React.FC<Props> = props => {

  return (
    <button onClick={() => signOut()}>
      Logout
    </button>
  );
};

export default Users;