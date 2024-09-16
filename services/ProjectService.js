const BASE_URL = 'http://localhost:8000';

const ProjectService = {
  getAllProjects: async () => {
    const response = await fetch(`${BASE_URL}/project/`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return await response.json();
  },

  addProject: async (newProject) => {
    const response = await fetch(`${BASE_URL}/project/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    });
    if (!response.ok) {
      throw new Error('Failed to add project');
    }
    return await response.json();
  },

  updateProject: async (projectId, updatedProject) => {
    const response = await fetch(`${BASE_URL}/project/${projectId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProject),
    });
    if (!response.ok) {
      throw new Error('Failed to update project');
    }
    return await response.json();
  },

  deleteProject: async (projectId) => {
    const response = await fetch(`${BASE_URL}/project/${projectId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete project');
    }
    return await response.json();
  },
};

export default ProjectService;
