import React from 'react';

const PermissionRow = ({ permission, onDelete, onEdit }) => {
  return (
    <tr>
      <td className="py-3 px-4">{permission.name}</td>
      <td className="py-3 px-4">{permission.allowed_api}</td>
      <td className="py-3 px-4">
        <button
          onClick={() => onEdit(permission)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(permission.id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default PermissionRow;
