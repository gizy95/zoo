import React from 'react';

const Form = ({ formState, handleInputChange, handleSubmit, isEditing, handleCancel }) => {
  return (
    <div>
      <h2>{isEditing ? 'Edit Hologram' : 'Add New Hologram'}</h2>
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
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
        {isEditing && <button type="button" onClick={handleCancel}>Cancel</button>}
      </form>
    </div>
  );
};

export default Form;
