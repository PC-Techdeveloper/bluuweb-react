/* Los estilos en línea NO son buena práctica ❎ */

import CounterButton from '../CounterButton';
/* Estilar en forma de objeto */

const Eventos = () => {
  const handleClick = () => {
    alert('Hola desde el componente Eventos');
  };

  return (
    <section>
      <h1>Eventos</h1>
      <button onClick={handleClick}>Click</button>

      <CounterButton />
      <CounterButton />
    </section>
  );
};

export default Eventos;
