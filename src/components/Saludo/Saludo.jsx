export const Saludo = ({mensaje, noches}) => {
   return (
    /* Etiquetas vacias son fragments o envolturas para evitar tener muchos divs
        Solo se puede enviar un solo elemento por componente, por elo los fragments*/
     <>
          <h1>{mensaje}</h1>
          <h2>{noches}</h2>
     </>
   )
}