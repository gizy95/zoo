import React from 'react';

const Table = ({ holograms }) => {
  return (
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
  );
};

export default Table;
