import React from 'react';

const RoleSelection = ({ role, setRole }) => {
  return (
    <div className="flex items-center space-x-4 mt-4">
      <p className="text-gray-400 text-xs">Select Role:</p>
      <div className="flex items-center">
        <input
          type="radio"
          id="user"
          name="role"
          value="user"
          checked={role === 'user'}
          onChange={(e) => setRole(e.target.value)}
          className="mr-2"
          required
        />
        <label htmlFor="user" className="text-gray-300 text-xs">User</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="admin"
          name="role"
          value="admin"
          checked={role === 'admin'}
          onChange={(e) => setRole(e.target.value)}
          className="mr-2"
          required
        />
        <label htmlFor="admin" className="text-gray-300 text-xs">Admin</label>
      </div>
    </div>
  );
};

export default RoleSelection;
