// src/components/ProjectRow.js
import React from 'react';

const ProjectRow = ({ project, onDelete, onEdit }) => {
  return (
    <tr>
      <td className="py-3 px-4">{project.name}</td>
      <td className="py-3 px-4">{project.description || 'No Description'}</td>
      <td className="py-3 px-4">
        <button
          onClick={() => onEdit(project)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(project.id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProjectRow;
