import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type Props = {
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: React.FC<Props> = ({
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(`
        group
        flex
        gap-x-3
        text-sm
        loading-6
        font-semibold
        w-full
        justify-center
        p-4
        text-gray-500
        hover:text-black
        hover:bg-gray-100
      `,
      active && 'text-black bg-gray-100'
    )}
    >
      <Icon className='h-6 w-6' />
    </Link>
  );
};

export default MobileItem;