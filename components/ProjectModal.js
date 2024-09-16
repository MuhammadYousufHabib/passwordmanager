import React, { useState, useEffect } from 'react';

const ProjectModal = ({ isOpen, onClose, onAddProject, onUpdateProject, currentProject }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentProject) {
      setName(currentProject.name);
      setDescription(currentProject.description || '');
    }
  }, [currentProject]);

  const handleSubmit = () => {
    if (currentProject) {
      onUpdateProject(currentProject.id, { name, description });
    } else {
      onAddProject({ name, description });
    }
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">{currentProject ? 'Edit Project' : 'Add Project'}</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
          className="mb-4 p-2 border rounded w-full"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project Description"
          className="mb-4 p-2 border rounded w-full"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            {currentProject ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProjectModal;
