'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/app/language-provider';
// import Modal from './modal';
import SearchMobile from './search-mobile';

export default function Search() {
  const { language } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const inputPlaceholder = language === 'ko' ? '도감 번호 또는 포켓몬 이름' : 'Pokedex number or Pokemon name';

  const handleOpenModal = () => (setShowModal(true));
  const handleCloseModal = () => (setShowModal(false));

  return (
    <div>
      <button type="button" onClick={handleOpenModal}>
        <div className="hidden lg:block bg-white border rounded-md">
          {inputPlaceholder}
        </div>
        <div className="block lg:hidden">
          btnIcon
        </div>
      </button>
      {showModal ? createPortal(
        <SearchMobile closeModal={handleCloseModal} />,
        document.body,
      ) : null}
    </div>
  );
}
