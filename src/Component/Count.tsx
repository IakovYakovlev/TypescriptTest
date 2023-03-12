import {useState} from 'react';

function Count() {
  const [count, setValue] = useState(0)

  function increment() {
    setValue( count + 1 )
  }

  function decrement() {
    setValue( count - 1 )
  }
  
  return (
    <>
      <h1>{count}</h1>
      
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Count;