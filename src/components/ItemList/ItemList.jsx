import { Item } from "../Item/Item";
import { ItemCart } from "../ItemCart/ItemCart";

// Recibe una lista de productos y acada uno lo transforma en un componente Item
export const ItemList = ({productos, plantilla}) => {
   return (
     <>
         {
            plantilla === "Item" ?
               productos.map(producto => <Item key={producto.id} item={producto} /> )
            :
               productos.map(producto => <ItemCart key={producto.id} item={producto} /> )
         }
     </>
   )
}