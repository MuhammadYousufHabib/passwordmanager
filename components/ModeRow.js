import React from 'react';

const ModeRow = ({ mode, onDelete, onEdit }) => {
  return (
    <tr>
      <td className="py-3 px-4">{mode.name}</td>
      <td className="py-3 px-4">
        <button
          onClick={() => onEdit(mode)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(mode.id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ModeRow;
