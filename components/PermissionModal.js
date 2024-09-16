// src/components/PermissionModal.js
import React, { useState, useEffect } from 'react';

const PermissionModal = ({ isOpen, onClose, onAddPermission, onUpdatePermission, currentPermission }) => {
  const [name, setName] = useState('');
  const [allowedApi, setAllowedApi] = useState('');

  useEffect(() => {
    if (currentPermission) {
      setName(currentPermission.name);
      setAllowedApi(currentPermission.allowed_api);
    }
  }, [currentPermission]);

  const handleSubmit = () => {
    if (currentPermission) {
      onUpdatePermission(currentPermission.id, { name, allowed_api: allowedApi });
    } else {
      onAddPermission({ name, allowed_api: allowedApi });
    }
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">{currentPermission ? 'Edit Permission' : 'Add Permission'}</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Permission Name"
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          value={allowedApi}
          onChange={(e) => setAllowedApi(e.target.value)}
          placeholder="Allowed API"
          className="mb-4 p-2 border rounded w-full"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            {currentPermission ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default PermissionModal;
