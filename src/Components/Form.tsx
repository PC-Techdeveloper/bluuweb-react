import { useState, type FormEvent } from 'react';

/* 
useRef: Permite obtener las referencias de los elementos DOM.
formData: Es un conjunto de pares clave/valor representando los campos de un formulario y sus valores.
 */

// type Field = 'username' | 'color' | 'accept';

const Form = () => {
  const [username, setUsername] = useState('');
  const [color, setColor] = useState('');
  const [accept, setAccept] = useState(false);

  // Estado para saber si el usuario ya interactuó con cada campo
  const [touched, setTouched] = useState({
    username: false,
    color: false,
    accept: false
  });

  // Función para marcar como campo "tocado"
  // (field: keyof typeof touched) -> forma automática
  type Field = 'username' | 'color' | 'accept';

  const handleBlur = (field: Field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Marca todos como tocados al intentar enviar
    setTouched({
      username: true,
      color: true,
      accept: true
    });

    // procesar el formulario
    if (username.length >= 3 && color !== '' && accept) {
      alert('Sending form to server...');
      console.log({ username, color, accept });
    }
  };

  return (
    <div className="container mx-auto">
      <h1>Formulario con Bootstrap</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => handleBlur('username')}
            className={`
            form-control
            ${
              touched.username &&
              (username.length >= 3 ? 'is-valid' : 'is-invalid')
            }
            `}
          />

          <div className="invalid-feedback">
            El nombre de usuario tiene que tener mínimo 3 carácteres
          </div>
        </div>

        <div className="mb-3">
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            onBlur={() => handleBlur('color')}
            className={`form-select ${
              touched.color && (color !== '' ? 'is-valid' : 'is-invalid')
            }`}
          >
            <option value="" disabled>
              Choose a color
            </option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>

          <div className="invalid-feedback">Seleccionar un color</div>
        </div>

        <div className="mb-3 form-check">
          <label className="form-check">
            I accept the terms
            <input
              type="checkbox"
              checked={accept}
              onChange={(e) => setAccept(e.target.checked)}
              onBlur={() => handleBlur('accept')}
              className={`form-check-input ${
                touched.accept && (accept ? 'is-valid' : 'is-invalid')
              }`}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
