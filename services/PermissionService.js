// src/services/PermissionService.js
const BASE_URL = 'http://localhost:8000';

const PermissionService = {
  getAllPermissions: async () => {
    const response = await fetch(`${BASE_URL}/permission/`);
    if (!response.ok) {
      throw new Error('Failed to fetch permissions');
    }
    return await response.json();
  },

  addPermission: async (newPermission) => {
    const response = await fetch(`${BASE_URL}/permission/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPermission),
    });
    if (!response.ok) {
      throw new Error('Failed to add permission');
    }
    return await response.json();
  },

  updatePermission: async (permissionId, updatedPermission) => {
    const response = await fetch(`${BASE_URL}/permission/${permissionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPermission),
    });
    if (!response.ok) {
      throw new Error('Failed to update permission');
    }
    return await response.json();
  },

  deletePermission: async (permissionId) => {
    const response = await fetch(`${BASE_URL}/permission/${permissionId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete permission');
    }
    return await response.json();
  },
};

export default PermissionService;
