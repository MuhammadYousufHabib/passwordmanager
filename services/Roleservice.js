const BASE_URL = 'http://localhost:8000/role/';

const RoleService = {
  async getAllRoles() {
    try {
      const response = await fetch(`${BASE_URL}`);
      if (!response.ok) {
        throw new Error('Failed to fetch roles');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  async addRole(newRole) {
    try {
      const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRole),
      });
      if (!response.ok) {
        throw new Error('Failed to add role');
      }
      const data = await response.json();
      console.log(data,"on add role")
      return data;
    } catch (error) {
      throw error;
    }
  },

  // Update an existing role (PUT)
  async updateRole(roleId, updatedRole) {
    try {
      const response = await fetch(`${BASE_URL}${roleId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRole),
      });
      if (!response.ok) {
        throw new Error('Failed to update role');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  async deleteRole(roleId) {
    try {
      const response = await fetch(`${BASE_URL}${roleId}/`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete role');
      }
    } catch (error) {
      throw error;
    }
  },
};

export default RoleService;
