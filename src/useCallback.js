import React, { useState, useCallback } from 'react';

function ChildComponent({ onClick }) {
  console.log('ChildComponent рендер!');
  return (
    <button onClick={onClick}>
      Нажми меня
    </button>
  );
}

function Callback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default Callback;
