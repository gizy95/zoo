import React from 'react';

const Table = ({ holograms, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Weight</th>
          <th>Superpower</th>
          <th>Extinct Since</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {holograms.map((hologram) => (
          <tr key={hologram._id}>
            <td>{hologram.name}</td>
            <td>{hologram.weight}</td>
            <td>{hologram.superpower}</td>
            <td>{hologram.extinctSince}</td>
            <td>
              <button className='edit' onClick={() => onEdit(hologram)}>Edit</button>
              <button className='delete' onClick={() => onDelete(hologram._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
