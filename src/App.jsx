import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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
      console.error('Error', error);
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
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Superpower</th>
            <th>Extinct Since</th>
          </tr>
        </thead>
        <tbody>
          {holograms.map((hologram) => (
            <tr key={hologram._id}>
              <td>{hologram.name}</td>
              <td>{hologram.weight}</td>
              <td>{hologram.superpower}</td>
              <td>{hologram.extinctSince}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add New Hologram</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formState.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight"
          value={formState.weight}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="superpower"
          placeholder="Superpower"
          value={formState.superpower}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="extinctSince"
          placeholder="Extinct Since"
          value={formState.extinctSince}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
