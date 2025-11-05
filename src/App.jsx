import "./App.css";
import { Button } from "./components/Button/Button";
import NavBar from "./components/navbar/NavBar";
import Select from './components/Select/Select';
``
/**
 * Imperial UI - Base showcase component.
 * This serves as the visual entry point and identity of the component library.
 */
function App() {
   
  return (
    <div className="imperial-app">
    
    

      {/* Margen superior para el navbar fijo */}
      <div className="main-content">
        <header className="imperial-header">
          <h1>🧱 Imperial UI</h1>
          <p>Librería de componentes reutilizables de Imperial Net</p>
        </header>

        <main className="imperial-main">
          <p>🚀 Proyecto iniciado correctamente.</p>
      
     
        </main>

        <footer className="imperial-footer">
          <small>Imperial Net © 2025 — Internal Component Library</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
