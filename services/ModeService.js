// src/services/ModeService.js
const BASE_URL = 'http://localhost:8000';

const ModeService = {
  getAllModes: async () => {
    const response = await fetch(`${BASE_URL}/mode/`);
    if (!response.ok) {
      throw new Error('Failed to fetch modes');
    }
    return await response.json();
  },

  addMode: async (newMode) => {
    const response = await fetch(`${BASE_URL}/mode/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMode),
    });
    if (!response.ok) {
      throw new Error('Failed to add mode');
    }
    return await response.json();
  },

  updateMode: async (modeId, updatedMode) => {
    const response = await fetch(`${BASE_URL}/mode/${modeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMode),
    });
    if (!response.ok) {
      throw new Error('Failed to update mode');
    }
    return await response.json();
  },

  deleteMode: async (modeId) => {
    const response = await fetch(`${BASE_URL}/mode/${modeId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete mode');
    }
    return await response.json();
  },
};

export default ModeService;
