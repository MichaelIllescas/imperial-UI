import "./App.css";


/**
 * Imperial UI - Base showcase component.
 * This serves as the visual entry point and identity of the component library.
 */
function App() {
 
return (
    <div className="main-content">
      {/* Margen superior para el navbar fijo */}
      <header className="imperial-header">
        <h1>Imperial UI</h1>
        <p>Librería de componentes React reutilizables</p>
        
      </header>
      
      <main className="imperial-main">
        <p>Cada componente está documentado en su carpeta, dentro de <code>src/components</code>.</p>
      </main>
     
   
      <footer className="imperial-footer">
        <small>Imperial UI © 2025 — Jonathan Illescas y José Pereyra</small>
      </footer>
    </div>
  );
}

export default App;