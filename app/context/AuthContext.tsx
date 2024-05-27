'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

type Props = {
  children: React.ReactNode,
}

const AuthContext: React.FC<Props> = ({
  children
}) => {

  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContext;