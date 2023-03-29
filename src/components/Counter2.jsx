import React, { useState, useEffect } from 'react';
import '../styles/CounterStyle.css'

function Counter({ endNumber }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < endNumber) {
      const interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
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
