import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export default function Modal ({ isOpen, onClose, children }:ModalProps) {
  const overlayClasses = isOpen
    ? 'fixed inset-0 bg-black opacity-50 z-50'
    : 'hidden';
  const modalClasses = isOpen
    ? 'fixed inset-0 flex items-center justify-center z-50'
    : 'hidden';

  return (
    <div>
      {/* Overlay */}
      <div
        className={overlayClasses}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className={modalClasses}>
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
          {/* Close button */}
          <button
            className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>

          {/* Modal content */}
          {children}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1>React Modal with Tailwind CSS</h1>

      <button
        className="bg-blue-500 text-white p-2 mt-4 rounded-md hover:bg-blue-600"
        onClick={openModal}
      >
        Open Modal
      </button>

      
    </div>
  );
};
