"use client";
import React, { useState } from 'react';
import RoleRow from '@/components/RoleRow';
import RoleModal from '@/components/RoleModal';
import { useRoles } from '@/hooks/useRoles';

const RoleTable = () => {
  const { roles, loading, error, addNewRole, updateRole, removeRole } = useRoles();
  const [showModal, setShowModal] = useState(false);
  const [editingRole, setEditingRole] = useState(null); 

  if (loading) return <p>Loading roles...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleAddRole =async (newRole) => {
   const data= await addNewRole(newRole);
    setShowModal(false);
    return data
    ;
  };

  const handleEditRole = (role) => {
    setEditingRole(role); 
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setEditingRole(null); 
    setShowModal(false);
  };

  return (
    <div className="p-10 w-[80vw]">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4">Role Name</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <RoleRow 
                key={role.id} 
                role={role} 
                onDelete={removeRole} 
                onEdit={() => handleEditRole(role)} 
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-end">
        <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow-lg">
          Add Role
        </button>
      </div>
      <RoleModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onSubmit={editingRole ? updateRole : handleAddRole}
        role={editingRole} 
      />
    </div>
  );
};

export default RoleTable;
