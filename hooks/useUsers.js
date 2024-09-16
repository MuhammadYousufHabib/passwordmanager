import { useState, useEffect } from 'react';
import { fetchUsers, addUser, deleteUser } from '../services/userService';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  const addNewUser = async (user) => {
    try {
      const addedUser = await addUser(user);
      setUsers((prev) => [...prev, addedUser]);
    } catch (error) {
      setError(error.message);
    }
  };

  const removeUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return { users, loading, error, addNewUser, removeUser };
};
