import './App.css';
import { Button } from './components/Button/Button';
/**
 * Imperial UI - Base showcase component.
 * This serves as the visual entry point and identity of the component library.
 */
function App() {
  const handleClick = () => {
    alert('¡Botón funcionando!');
  };
  return (
    <div className="imperial-app">
      <header className="imperial-header">
        <h1>🧱 Imperial UI</h1>
        <p>Librería de componentes reutilizables de Imperial Net</p>
      </header>

      <main className="imperial-main">
        <p>🚀 Proyecto iniciado correctamente.</p>
         <section className="component-showcase">
          <h2>Button Component</h2>
          
          <div className="button-group">
            <Button onClick={handleClick}>
              Primary Button
            </Button>
            
            <Button variant="secondary" onClick={handleClick}>
              Secondary Button
            </Button>
            
            <Button variant="danger" onClick={handleClick}>
              Danger Button
            </Button>
          </div>

          <div className="button-group">
            <Button size="small" onClick={handleClick}>
              Small
            </Button>
            
            <Button size="medium" onClick={handleClick}>
              Medium
            </Button>
            
            <Button size="large" onClick={handleClick}>
              Large
            </Button>
          </div>

          <div className="button-group">
            <Button disabled>
              Disabled Button
            </Button>
          </div>
        </section>
      </main>

      <footer className="imperial-footer">
        <small>Imperial Net © 2025 — Internal Component Library</small>
      </footer>
    </div>
  );
}

export default App;
