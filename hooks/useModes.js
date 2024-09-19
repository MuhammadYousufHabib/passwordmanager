import { useState, useEffect } from 'react';
import ModeService from '@/services/ModeService';

export const useModes = () => {
  const [modes, setModes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchModes();
  }, []);

  const fetchModes = async () => {
    try {
      const data = await ModeService.getAllModes();
      setModes(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch modes');
      setLoading(false);
    }
  };

  const addNewMode = async (newMode) => {
    try {
      const createdMode = await ModeService.addMode(newMode);
      setModes([...modes, createdMode]);
    } catch (err) {
      setError('Failed to add mode');
    }
  };

  const updateMode = async (modeId, updatedMode) => {
    try {
      const updated = await ModeService.updateMode(modeId, updatedMode);
      setModes(modes.map((mode) => (mode.id === modeId ? updated : mode)));
    } catch (err) {
      setError('Failed to update mode');
    }
  };

  const removeMode = async (modeId) => {
    try {
      await ModeService.deleteMode(modeId);
      setModes(modes.filter((mode) => mode.id !== modeId));
    } catch (err) {
      setError('Failed to delete mode');
    }
  };

  return { modes, loading, error, addNewMode, updateMode, removeMode };
};
