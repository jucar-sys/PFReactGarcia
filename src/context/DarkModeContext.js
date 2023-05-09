import { useState, createContext, useContext } from "react";

// Creo mi contexto
const DarkModeContext = createContext();

export const useDarkModeContext = () => useContext(DarkModeContext);

// Forma de proveer el contexto de mi app
export const DarkModeProvider = (props) => {
    // Definimos el valor inicial de nuestro dark mode
    const [darkMode, setDarkMode] = useState(false);

    // Funciones para modificar mi state
    const toggleDarkMode = () => {
        // Si estaba en V lo paso a F y viceversa
        setDarkMode(!darkMode);

        // Agregar clase de Css por tema de bootstrap o bootswatch
        if(!darkMode){
            document.body.classList.add('darkMode');
        } else {
            document.body.classList.remove('darkMode');
        }
    };

    // Agrego las funciones que van a ser exportados
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )

};