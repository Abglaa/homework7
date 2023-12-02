import React, { useState, useMemo } from 'react';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, lastNumber + 1]);
  };

  const memoizedNumbers = useMemo(() => numbers, [numbers]);

  return (
    <div>
      <ul>
        {memoizedNumbers.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Добавить число</button>
    </div>
  );
}

export default App;
