import { useState, useEffect } from 'react';
import RoleService from '@/services/Roleservice'; 

export const useRoles = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const data = await RoleService.getAllRoles();
      setRoles(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch roles');
      setLoading(false);
    }
  };

  const addNewRole = async (newRole) => {
    try {
      const createdRole = await RoleService.addRole(newRole);
      setRoles([...roles, createdRole]);
      return createdRole
    } catch (err) {
      setError('Failed to add role');
    }
  };

  const updateRole = async (roleId, updatedRole) => {
    try {
      const updated = await RoleService.updateRole(roleId, updatedRole);
      setRoles(roles.map((role) => (role.id === roleId ? updated : role)));
    } catch (err) {
      setError('Failed to update role');
    }
  };

  const removeRole = async (roleId) => {
    try {
      await RoleService.deleteRole(roleId);
      setRoles(roles.filter((role) => role.id !== roleId));
    } catch (err) {
      setError('Failed to delete role');
    }
  };

  return { roles, loading, error, addNewRole, updateRole, removeRole };
};
