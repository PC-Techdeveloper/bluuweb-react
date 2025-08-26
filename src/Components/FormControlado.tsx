import { useState } from 'react';

const FormControlado = () => {
  const [username, setUsername] = useState('bluuWeb');

  return (
    <div style={{ margin: '20px' }}>
      <h1>Formulario Controlado</h1>
      <hr />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h2>{username}</h2>
    </div>
  );
};

export default FormControlado;
