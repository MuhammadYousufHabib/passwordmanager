// src/hooks/useProjects.js
import { useState, useEffect } from 'react';
import ProjectService from '@/services/ProjectService';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await ProjectService.getAllProjects();
      setProjects(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch projects');
      setLoading(false);
    }
  };

  const addNewProject = async (newProject) => {
    try {
      const createdProject = await ProjectService.addProject(newProject);
      setProjects([...projects, createdProject]);
    } catch (err) {
      setError('Failed to add project');
    }
  };

  const updateProject = async (projectId, updatedProject) => {
    try {
      const updated = await ProjectService.updateProject(projectId, updatedProject);
      setProjects(projects.map((project) => (project.id === projectId ? updated : project)));
    } catch (err) {
      setError('Failed to update project');
    }
  };

  const removeProject = async (projectId) => {
    try {
      await ProjectService.deleteProject(projectId);
      setProjects(projects.filter((project) => project.id !== projectId));
    } catch (err) {
      setError('Failed to delete project');
    }
  };

  return { projects, loading, error, addNewProject, updateProject, removeProject };
};
