import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import Effect from './Components/UseEffect/Effect';
//import Apis from './Components/Apis';
import AppPokemon from './Components/AppPokemon';
// import App from './App.tsx';
// import List from './Components/List/List.tsx';
// import Eventos from './Components/Eventos/Eventos.tsx';
// import Form from './Components/Form.tsx';
// import FormControlado from './Components/FormControlado.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App />
    <List />
    <Eventos />
    <Form />
    <FormControlado /> */}
    {/* <Effect /> */}
    {/* <Apis /> */}
    <AppPokemon />
  </StrictMode>
);
