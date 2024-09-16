import React from 'react';

const RoleRow = ({ role, onDelete, onEdit }) => {
  return (
    <tr>
      <td className="py-3 px-4">{role.name}</td>
      <td className="py-3 px-4 flex space-x-4">
        <button onClick={onEdit} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
          Edit
        </button>
        <button onClick={() => onDelete(role.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default RoleRow;
