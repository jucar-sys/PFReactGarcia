import { useState } from "react";

/* CUSTOM HOOK */

// Si no se ingresa el valor inicial lo igualamos a 1
export const useCount = (valInicial = 1, min, max) => {

    // si valor inicial es menr o mayor que los min o max lo igualamos al min
    if(valInicial < min || valInicial > max){
        valInicial = min;
    }

    const [count, setCount] = useState(valInicial);

    const sum = () => count < max && setCount(count + 1);
    const minus = () => count > min && setCount(count - 1);

    const reset = () => setCount(valInicial); // Resetear el valor 1

    return {count, sum, minus, reset}
};