'use client';

import Modal from '@/app/components/Modal';
import Image from 'next/image';
import React from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<Props> = ({ isOpen, onClose, src }) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='w-80 h-80'>
        <Image
          src={src}
          alt="Image"
          className="w-full h-auto"
          fill
        />
      </div>
    </Modal>
  );
};

export default ImageModal;