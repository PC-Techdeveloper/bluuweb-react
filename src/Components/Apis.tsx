import { useEffect, useState } from 'react';

/* Llamadas a APIS con useEffect */
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Apis = () => {
  const [todo, setTodo] = useState<null | Todo>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    //Llamada a la API
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!res.ok) throw new Error('404 en la API');
        const data = (await res.json()) as Todo;
        setTodo(data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          // return setError(e.message);
        }
        console.log(e);
        // setError('Error más grave ❌');
        // setError('Error más grave ❌');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) return <p>Loading... 🪫</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetch y useEffect</h1>
      <div>
        <pre>{JSON.stringify(todo, null, 2)}</pre>
      </div>
      {/* Mostrando los datos en formato JSON */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default Apis;
