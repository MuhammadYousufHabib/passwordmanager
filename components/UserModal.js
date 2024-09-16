import React, { useState } from 'react';

const UserModal = ({ isOpen, onClose, onAddUser }) => {
  const [newUser, setNewUser] = useState({ name: '', username: '', email: '', password: '' });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(newUser);
    setNewUser({ name: '', username: '', email: '', password: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleChange} required className="w-full mb-4 p-2 border" />
          <input type="text" name="username" placeholder="Username" value={newUser.username} onChange={handleChange} required className="w-full mb-4 p-2 border" />
          <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleChange} required className="w-full mb-4 p-2 border" />
          <input type="password" name="password" placeholder="Password" value={newUser.password} onChange={handleChange} required className="w-full mb-4 p-2 border" />
          <div className="flex justify-end">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mr-2">Add</button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
