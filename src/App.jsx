import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [holograms, setHolograms] = useState([]);
  const [formState, setFormState] = useState({ name: '', weight: '', superpower: '', extinctSince: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentHologramId, setCurrentHologramId] = useState(null);

  useEffect(() => {
    fetchHolograms();
  }, []);

  const fetchHolograms = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/holograms');
      setHolograms(response.data);
    } catch (error) {
      console.error('Error fetching holograms:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/holograms/${currentHologramId}`, formState);
      } else {
        await axios.post('http://localhost:5000/api/holograms', formState);
      }
      fetchHolograms();
      resetForm();
    } catch (error) {
      console.error('Error saving hologram:', error);
    }
  };

  const handleEdit = (hologram) => {
    setFormState(hologram);
    setCurrentHologramId(hologram._id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/holograms/${id}`);
      fetchHolograms();
    } catch (error) {
      console.error('Error deleting hologram:', error);
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setFormState({ name: '', weight: '', superpower: '', extinctSince: '' });
    setIsEditing(false);
    setCurrentHologramId(null);
  };

  return (
    <div className="App">
      <h1>Virtual Zoo</h1>
      <Table holograms={holograms} onEdit={handleEdit} onDelete={handleDelete} />
      <Form
        formState={formState}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isEditing={isEditing}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default App;
