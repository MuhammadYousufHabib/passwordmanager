"use client"
import React, { useState } from 'react';
import ModeRow from '@/components/ModeRow';
import ModeModal from '@/components/ModeModal';
import { useModes } from '@/hooks/useModes';

const ModeTable = () => {
  const { modes, loading, error, addNewMode, updateMode, removeMode } = useModes();
  const [showModal, setShowModal] = useState(false);
  const [currentMode, setCurrentMode] = useState(null);

  const openModal = (mode = null) => {
    setCurrentMode(mode);
    setShowModal(true);
  };

  if (loading) return <p>Loading modes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-10 w-[80vw]">
      <h1 className="text-2xl mb-6">Mode Management</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {modes.map((mode) => (
              <ModeRow
                key={mode.id}
                mode={mode}
                onDelete={removeMode}
                onEdit={() => openModal(mode)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => openModal()}
        className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg"
      >
        Add New Mode
      </button>

      <ModeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddMode={addNewMode}
        onUpdateMode={updateMode}
        currentMode={currentMode}
      />
    </div>
  );
};

export default ModeTable;
