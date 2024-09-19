import React, { useState, useEffect } from 'react';

const UserModal = ({ isOpen, onClose, onAddUser }) => {
  const [newUser, setNewUser] = useState({ name: '', username: '', email: '', password: '', role: '' });
  const [roles, setRoles] = useState([]);
const [user_id, setuser_id] = useState()
const [role_id, setrole_id] = useState()
  // Fetch roles from the API when the modal is opened
  useEffect(() => {
    if (isOpen) {
      fetchRoles();
    }
  }, [isOpen]);

  const fetchRoles = async () => {
    try {
      const response = await fetch("http://localhost:8000/role/");
      const fetchedRoles=await response.json();
      setRoles(fetchedRoles); 
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  
    if (name === "role") {
      console.log("Selected Role ID:", value);
      setrole_id(Number(value))
    }  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response=await onAddUser(newUser);
    console.log(response.id,"current user id")
    setuser_id(Number(response.id))
    setNewUser({ name: '', username: '', email: '', password: ''});
    try {
      const roleResponse = await fetch("http://localhost:8000/assign_role", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: response.id, role_id: role_id }), 
      });
  
      if (!roleResponse.ok) {
        throw new Error('Failed to assign role');
      }
  
      const roleData = await roleResponse.json(); 
      console.log(roleData, "Role assignment response");
      
      setNewUser({ name: '', username: '', email: '', password: '', role: '' });
      
    } catch (error) {
      console.error('Error assigning role:', error);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleChange}
            required
            className="w-full mb-4 p-2 border"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={newUser.username}
            onChange={handleChange}
            required
            className="w-full mb-4 p-2 border"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-2 border"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={newUser.password}
            onChange={handleChange}
            required
            className="w-full mb-4 p-2 border"
          />

          <select
            name="role"
            value={newUser.role}
            onChange={handleChange}
            required
            className="w-full mb-4 p-2 border"
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>

          <div className="flex justify-end">
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded mr-2">Add</button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
