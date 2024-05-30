'use client';

import React from 'react';
import useActiveChannel from '../hooks/useActiveChannel';

type Props = {}

const ActiveState: React.FC<Props> = props => {
  useActiveChannel();

  return (
    <div>
      
    </div>
  );
};

export default ActiveState;