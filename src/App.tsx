import { useState } from "react";

import { Button } from "./components";


//batching  dosificar hace los cambios al terminar toda la logica de la funcion 
function App() {

  const [count, setCount] = useState(0)

  const countMore = () => {
    setCount((count + 3))
    setCount((count + 4))
    setCount((count ) => count + 1)
  };
 // 
    return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
     
    </>
  );
}

export default App;
