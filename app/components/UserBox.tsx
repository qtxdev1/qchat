import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';
import Avatar from '@/app/components/Avatar';
import LoadingModal from './LoadingModal';

type Props = {
  data: User;
}

const UserBox: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    
    axios.post('/api/conversations', {
      userId: data.id,
    })
    .then((data) => {
      router.push(`/conversations/${data.data.id}`);
    })
    .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <>
      {isLoading && (
        <LoadingModal />
      )}
      <div
        onClick={handleClick}
        className='
          w-full
          relative
          flex
          items-center
          space-x-3
          bg-white
          p-3
          hover:bg-neutral-50
          rounded-lg
          transition
          cursor-pointer
        '
      >
        <Avatar user={data} />
        <div className='min-w-0 flex-1'>
          <div className='focus:outline-none'>
            <div
              className='
                flex
                items-center
                justify-between
                mb-1
              '
            >
              <p
                className='
                  text-sm
                  font-medium
                  text-gray-900
                '
              >
                {data.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;