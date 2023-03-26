import { useState } from "react";

export const Contador = () => {
    const [contador, setContador] = useState(1);

    const rest = () => setContador(contador - 1);
    const sum = () => setContador(contador + 1);

   return (
     <div>
        {/* En reactJS los eventos se ejecutan directo en el html en una linea (inline) */}
          <button onClick={() => rest()}>-</button>
          {contador}
          <button onClick={() => sum()}>+</button>
     </div>
   )
}