"use client"
import React, { useState } from 'react';
import UserRow from '@/components/UserRow';
import UserModal from '@/components/UserModal';
import { useUsers } from '@/hooks/useUsers';

const UserTable = () => {
  const { users, loading, error, addNewUser, removeUser } = useUsers();
  const [showModal, setShowModal] = useState(false);
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    
    <div className="p-10 w-[80vw]">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Username</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} onDelete={removeUser} onEdit={() => console.log('Editing user')} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-end">
        <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow-lg">
          Add User
        </button>
      </div>
      <UserModal isOpen={showModal} onClose={() => setShowModal(false)} onAddUser={addNewUser} />
    </div>
  );
};

export default UserTable;
