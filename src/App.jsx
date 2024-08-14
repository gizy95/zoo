import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form.jsx';
import Table from './components/Table.jsx';

function App() {
  const [holograms, setHolograms] = useState([]);
  const [formState, setFormState] = useState({ name: '', weight: '', superpower: '', extinctSince: '' });

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
      await axios.post('http://localhost:5000/api/holograms', formState);
      fetchHolograms();
      setFormState({ name: '', weight: '', superpower: '', extinctSince: '' });
    } catch (error) {
      console.error('Error adding hologram:', error);
    }
  };

  return (
    <div className="App">
      <h1>Virtual Zoo</h1>
      <Table holograms={holograms} />
      <Form formState={formState} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
