import './App.css';
import {Saludo} from './Saludo/Saludo.jsx';
import {Contador} from './Contador/Contador.jsx';

export const App = () => {
   return (
     <div>
          {/* Importamos el componente Saludo y le pasamos el parametro mensaje */}
          <Saludo mensaje={"Hola, buenos días"} noches={"Hola, buenas noches"} />
          <Contador />
     </div>
   )
}

// export const App = () => {
//     /*
//   === HTML -> JSX
//     class -> className
//     <input> -> <input />
//     <img> -> <img />
//     <br> -> <br />
//     <hr> -> <hr />
//     style = "nombreProp: valor" -> style = {{nombreProp: "valor"}}

//     La mayor parte de las propiedades -> camelCase
//     bacgroundColor

//     // Variables
//     `${valor}` -> {valor}
//   */
//   const valor = 5;
//   return (
//     <div className="divGeneral" style={{backgroundColor: "red"}}>
//         <h1>Hola mundo</h1>
//         <input type="text" />
//         <p>{valor}</p>
//     </div>
//   )
// }