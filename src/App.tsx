import './App.css';
import Button from './Components/Button/Button';

interface User {
  username: string;
  email: string;
  imageURL: string;
  loggedIn: boolean;
}

const App = () => {
  const user: User = {
    username: 'Ignacio',
    email: 'ignacio@gmail.com',
    imageURL: 'https://i.pravatar.cc/150?img=3',
    loggedIn: true
  };

  /* Destructuring de objetos */
  // const { email, username, imageURL, loggedIn } = user;

  if (!user.loggedIn) {
    return <p>El usuario no ha iniciado sesión ❌</p>;
  }

  /* Mostrar Datos */
  /* Operador Ternario, Corto circuito AND y expresión JSX*/

  return (
    <main>
      {/* <h1>Hola: {user.username ? user.username : 'Anónimo'}</h1> */}
      {user.username && (
        <>
          <h1>Hola: {user.username}</h1>
          <p>Lorem, ipsum.</p>
        </>
      )}
      <h2 className="">Email: {user.email}</h2>
      <img
        src={user.imageURL}
        alt={`imagen-${user.username}`}
        width={100}
        style={{
          borderRadius: '100%'
        }}
      />
      <Button />
    </main>
  );
};

export default App;

// Componente

// function MyButton() {
//   return <button>Mi botón 1</button>;
// }

// const MySecondButton = () => {
//   return <button>Mi botón 2</button>;
// };
