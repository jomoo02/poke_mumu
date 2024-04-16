'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import SearchIcon from '../icons/search';
import Search from './search';

export default function SearchPortal() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => (setShowModal(true));
  const handleCloseModal = () => (setShowModal(false));

  return (
    <div className="flex items-center">
      <button type="button" onClick={handleOpenModal} aria-label="Search">
        <SearchIcon size="1.8rem" color="#fff" />
      </button>
      {showModal ? createPortal(
        <Search closeModal={handleCloseModal} />,
        document.body,
      ) : null}
    </div>
  );
}
