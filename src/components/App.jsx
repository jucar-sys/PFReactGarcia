import './App.css';
import { NavBar } from './NavBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';

export const App = () => {
   return (
     <>
          <NavBar />
          <div className='container pt-4'>
            <ItemListContainer greeting={"Productos"}/>
          </div>
     </>
   )
}