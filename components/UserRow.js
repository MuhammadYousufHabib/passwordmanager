const UserRow = ({ user, onDelete, onEdit }) => (
    <tr className="text-center border-b">
      <td className="py-3 px-4">{user.name || 'No Name'}</td>
      <td className="py-3 px-4">{user.username}</td>
      <td className="py-3 px-4">{user.email}</td>
      <td className="py-3 px-4 space-x-2">
        <button
          onClick={() => onEdit(user.id)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded shadow"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow"
        >
          Delete
        </button>
      </td>
    </tr>
  );
  
  export default UserRow;
  