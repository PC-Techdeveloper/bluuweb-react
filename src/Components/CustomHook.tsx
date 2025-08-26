// /*
// Son componentes personalizados que permiten reutilizar lógica de estado y efectos en componentes funcinales. Son una forma de extraer lógica compleja y compartirla entre diferentes componentes sin duplicar código.
// */

// import Apis from './Apis';

// interface MyTodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const CustomHook = () => {
//   const { todo, isLoading, error } = Apis<Todo>(
//     'https://jsonplaceholder.typicode.com/todos/1'
//   );

//   if (isLoading || !todo) return <p>Loading... 🪫</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Custom Hook</h1>
//       <pre>{JSON.stringify(todo, null, 2)}</pre>
//     </div>
//   );
// };

// export default CustomHook;
