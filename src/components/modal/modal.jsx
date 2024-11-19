import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Modalni ochish tugmasi */}
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Open Modal
      </button>

      {/* Modal ochiq bo'lsa */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay (qora fon) */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>

          {/* Modal mazmuni */}
          <div
            className="fixed inset-0 flex flex-col bg-white shadow-lg transform animation-slideInTop"
          >
            {/* Yopish tugmasi */}
            <button
              onClick={closeModal}
              className="self-end p-3 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>

            {/* Modal kontenti */}
            <div className="flex-1 p-6">
              <h1 className="text-2xl font-bold">Tepadagi tushadigan modal</h1>
              <p className="mt-4 text-gray-600">
                Bu modalni to'liq ekran bo'ylab ochish va tepadan sekin tushishini kuzatishingiz mumkin.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
