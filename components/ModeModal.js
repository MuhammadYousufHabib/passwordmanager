// src/components/ModeModal.js
import React, { useState, useEffect } from 'react';

const ModeModal = ({ isOpen, onClose, onAddMode, onUpdateMode, currentMode }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (currentMode) {
      setName(currentMode.name);
    }
  }, [currentMode]);

  const handleSubmit = () => {
    if (currentMode) {
      onUpdateMode(currentMode.id, { name });
    } else {
      onAddMode({ name });
    }
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">{currentMode ? 'Edit Mode' : 'Add Mode'}</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Mode Name"
          className="mb-4 p-2 border rounded w-full"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            {currentMode ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModeModal;
