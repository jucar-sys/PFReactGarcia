import { useCount } from "../../hooks/useCount"

export const ItemCount = ({ValInicial, min, max, onAdd}) => {

    // HOOK personalizado
    const {count, minus, sum, reset} = useCount(ValInicial, min, max);

   return (
     <div>
        <button className="btn btn-dark" onClick={minus}>-</button>
         <strong className="px-2 ">{count}</strong>
        <button className="btn btn-dark" onClick={sum}>+</button>
        <hr />
        <button className="btn btn-danger" onClick={reset}>Reset</button>
        <button className="btn btn-success mx-3" onClick={() => {onAdd(count)}}>Agregar al carrito</button>
     </div>
   )
}