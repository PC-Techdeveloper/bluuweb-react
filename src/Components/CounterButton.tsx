import { useState } from 'react';

const CounterButton = () => {
  const [counter, setCounter] = useState(0);

  const handleClickIncrement = () => {
    const newValue = counter + 1;
    setCounter(newValue);
  };

  return (
    <button
      style={{ marginLeft: '1rem', cursor: 'pointer' }}
      onClick={handleClickIncrement}
    >
      {counter}
    </button>
  );
};

export default CounterButton;
