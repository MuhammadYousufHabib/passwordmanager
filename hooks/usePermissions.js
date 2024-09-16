// src/hooks/usePermissions.js
import { useState, useEffect } from 'react';
import PermissionService from '@/services/PermissionService';

export const usePermissions = () => {
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPermissions();
  }, []);

  const fetchPermissions = async () => {
    try {
      const data = await PermissionService.getAllPermissions();
      setPermissions(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch permissions');
      setLoading(false);
    }
  };

  const addNewPermission = async (newPermission) => {
    try {
      const createdPermission = await PermissionService.addPermission(newPermission);
      setPermissions([...permissions, createdPermission]);
    } catch (err) {
      setError('Failed to add permission');
    }
  };

  const updatePermission = async (permissionId, updatedPermission) => {
    try {
      const updated = await PermissionService.updatePermission(permissionId, updatedPermission);
      setPermissions(permissions.map((permission) => (permission.id === permissionId ? updated : permission)));
    } catch (err) {
      setError('Failed to update permission');
    }
  };

  const removePermission = async (permissionId) => {
    try {
      await PermissionService.deletePermission(permissionId);
      setPermissions(permissions.filter((permission) => permission.id !== permissionId));
    } catch (err) {
      setError('Failed to delete permission');
    }
  };

  return { permissions, loading, error, addNewPermission, updatePermission, removePermission };
};
