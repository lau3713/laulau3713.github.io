import React, { useState, useEffect } from 'react';

function Counter({ endNumber }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < endNumber) {
      const interval = setInterval(() => {
        setCount(count + 1);
      }, 2);
      return () => clearInterval(interval);
    }
  }, [count, endNumber]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;
