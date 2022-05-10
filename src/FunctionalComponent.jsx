import React, {useEffect, useState} from 'react';
import Welcome from "./Welcome";

function FunctionalComp () {

  const[count, setCount] = useState(0);

  useEffect(() => {
    console.log("From use effect");
    return () => {
      console.log("cleaned up");
    };
  }, [])

  const handleInc = () => {setCount(count + 1)}

  console.log("Return func comp")
  return (
    <div>
      <h1>Functional Component</h1>
      <button onClick={handleInc}>Increment</button>
      <p>Count value: {count}</p>

      <Welcome name={"Smith"} />
    </div>
  )
}

export default FunctionalComp