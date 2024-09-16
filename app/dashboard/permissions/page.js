"use client"
import React, { useState } from 'react';
import PermissionRow from '@/components/PermissionRow';
import PermissionModal from '@/components/PermissionModal';
import { usePermissions } from '@/hooks/usePermissions';

const PermissionTable = () => {
  const { permissions, loading, error, addNewPermission, updatePermission, removePermission } = usePermissions();
  const [showModal, setShowModal] = useState(false);
  const [currentPermission, setCurrentPermission] = useState(null);

  const openModal = (permission = null) => {
    setCurrentPermission(permission);
    setShowModal(true);
  };

  if (loading) return <p>Loading permissions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-10 w-[80vw]">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Allowed API</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <PermissionRow
                key={permission.id}
                permission={permission}
                onDelete={removePermission}
                onEdit={() => openModal(permission)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-end">
        <button onClick={() => openModal()} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow-lg">
          Add Permission
        </button>
      </div>
      <PermissionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddPermission={addNewPermission}
        onUpdatePermission={updatePermission}
        currentPermission={currentPermission}
      />
    </div>
  );
};

export default PermissionTable;
