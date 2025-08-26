/* 
useEffect: Hook especial de react que permite ejecutar efectos secundarios en componentes funcionales, llamadas a APIS, suscripciones o manipulación del DOM.

¿Qué es un array de dependencias?: Indica a react que debe volver a ejecutar el efecto cuando se produzca un cambio en la dependencia. Si no se especifica ninguna dependencia, el efecto se ejecutará cuando el componente se monte. Si no se proporciona ninguna dependencia, el efecto se ejecutará dentro de un bucle infinito.
*/

// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
import Modal from '../Modal';
const Effect = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Me ejecuto cada segundo... ✅');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('Temporizador detenido... ❌');
    };
  }, []);

  /* Efectos de Limpieza: En los efectos secundarios es importante realizar una limpieza para evitar fugas de memoria y comportamientos inesperados.*/
  // return () => {
  //   clearInterval(timer);
  // };

  //const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log('El componente está montado');
  //   document.title = `Count: ${count}`;
  // }, [count]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <h2>useEffect</h2>
      <button
        className={`btn btn-${!isOpen ? 'Success' : 'Warning'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div className="my-5">{isOpen && <Modal />}</div>
    </div>
  );
};
export default Effect;
