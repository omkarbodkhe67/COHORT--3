import React, { useState } from 'react';
import { usePrev } from './hooks/use-prev';

const UsePrevHook = () => {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <div>
      <h2>usePrev</h2>

      <p>{state}</p>
      <button 
        onClick={() => {
          setState((curr) => curr + 1);  // Corrected this line
        }}
      >
        Click me
      </button>
      <p>The previous value was {prev}</p>
    </div>
  );
};

export default UsePrevHook;
