import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const RoleModal = ({ isOpen, onClose, onSubmit, role }) => {
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState([]);
  const [selectedPermission, setSelectedPermission] = useState(null); // Single permission selection
const [permissionid, setpermissionid] = useState()
const [roleid, setroleid] = useState()
  // Fetch permissions from the API when the modal is opened
  useEffect(() => {
    if (isOpen) {
      fetchPermissions();
      if (role) {
        setName(role.name); // Set the name if editing
        setSelectedPermission(
          role.permissions.length > 0 ? { value: role.permissions[0].id, label: role.permissions[0].name } : null
        ); // Load role's first permission if editing
      } else {
        setName('');
        setSelectedPermission(null); // Clear permissions if adding a new role
      }
    }
  }, [isOpen, role]);

  const fetchPermissions = async () => {
    try {
      const response = await fetch('http://localhost:8000/permission');
      const fetchedPermissions = await response.json();
      const formattedPermissions = fetchedPermissions.map((permission) => ({
        value: permission.id,
        label: permission.name,
      }));
      setPermissions(formattedPermissions);
    } catch (error) {
      console.error('Error fetching permissions:', error);
    }
  };

  const handlePermissionChange = (selectedOption) => {
    setSelectedPermission(selectedOption || null);
    if (selectedOption) {
      console.log("Selected permission ID:", selectedOption.value);
      setpermissionid(Number(selectedOption.value))
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !selectedPermission) return;

    const roleData = {
      name,
      permissions: [selectedPermission.value], // Single permission ID
    };

    try {
      if (role) {
        await onSubmit(role.id, roleData); // Edit role
      } else {
        const createdRole = await onSubmit(roleData); // Add new role
        setroleid(Number(createdRole.id))
          console.log(createdRole,"the role created")


       // Now make the API call to assign_permission
        const assignPermissionResponse = await fetch('http://localhost:8000/assign_permission', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ role_id: roleid, permission_id: permissionid }),
        });

        if (!assignPermissionResponse.ok) {
          throw new Error('Error assigning permission');
        }

        const assignData = await assignPermissionResponse.json();
        console.log('Permission successfully assigned:', assignData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4">{role ? 'Edit Role' : 'Add Role'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Role Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Assign Permission</label>
            <Select
              options={permissions}
              value={selectedPermission}
              onChange={handlePermissionChange}
              className="basic-single-select"
              classNamePrefix="select"
              placeholder="Select a permission..."
              isMulti={false} // Single selection
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              {role ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoleModal;
