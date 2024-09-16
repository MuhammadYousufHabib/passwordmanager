"use client";
import React, { useState } from 'react';
import ProjectRow from '@/components/ProjectRow';
import ProjectModal from '@/components/ProjectModal';
import { useProjects } from '@/hooks/useProjects';

const ProjectTable = () => {
  const { projects, loading, error, addNewProject, updateProject, removeProject } = useProjects();
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project = null) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  // Handle loading and error states
  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-10 w-[80vw]">

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <ProjectRow
                key={project.id}
                project={project}
                onDelete={removeProject}
                onEdit={() => openModal(project)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => openModal()}
        className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg"
      >
        Add New Project
      </button>

      <ProjectModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddProject={addNewProject}
        onUpdateProject={updateProject}
        currentProject={currentProject}
      />
    </div>
  );
};

export default ProjectTable;
