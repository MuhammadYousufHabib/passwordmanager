import React, { useState, useEffect } from 'react';

const RoleModal = ({ isOpen, onClose, onSubmit, role }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (role) {
      setName(role.name); // Set the name if editing
    } else {
      setName(''); // Clear the form if adding a new role
    }
  }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const roleData = { name };
    if (role) {
      onSubmit(role.id, roleData); // Edit role
    } else {
      onSubmit(roleData); // Add new role
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4">{role ? 'Edit Role' : 'Add Role'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Role Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              {role ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoleModal;
