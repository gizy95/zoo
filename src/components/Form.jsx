import React from 'react';

const Form = ({ formState, handleInputChange, handleSubmit }) => {
  return (
    <div>
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
};

export default Form;
