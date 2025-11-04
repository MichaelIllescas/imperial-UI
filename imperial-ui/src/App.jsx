import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { DatePicker } from './components/DatePicker/DatePicker';
import { ProgressBar } from './components/ProgressBar/ProgressBar';

/**
 * Imperial UI - Base showcase component.
 * This serves as the visual entry point and identity of the component library.
 */
function App() {
  const handleClick = () => {
    alert('¡Botón funcionando!');
  };

  // Estados para los DatePickers
  const [fecha1, setFecha1] = useState("");
  const [fecha2, setFecha2] = useState("");
  const [fechaInicio, setFechaInicio]= useState("");
  const [fechaFin, setFechaFin]= useState("");
  return (
    <div className="imperial-app">
      <header className="imperial-header">
        <h1>🧱 Imperial UI</h1>
        <p>Librería de componentes reutilizables de Imperial Net</p>
      </header>

      <main className="imperial-main">
        <p>🚀 Proyecto iniciado correctamente.</p>

         {/* Button Component */}         
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

         {/* 👇 ProgressBar Component */}
         <section className="component-showcase">
          <h2>ProgressBar Component</h2>
          <div className="progress-group">
            <ProgressBar value={25} variant="info" />
            <ProgressBar value={50} variant="success" />
            <ProgressBar value={75} variant="warning" />
            <ProgressBar value={100} variant="danger" />
          </div>

          <div className="progress-group">
            <ProgressBar value={40} size="small" />
            <ProgressBar value={60} size="medium" />
            <ProgressBar value={80} size="large" />
          </div>

          <div className="progress-group">
            <ProgressBar value={55} animated />
            <ProgressBar value={70} showLabel={false} />
          </div>
        </section>

         {/* 👇 DatePicker Component */}
         <section className="component-showcase">
          <h2>DatePicker Component</h2>
          <div className="datepicker-group">
            <DatePicker
            label="Fecha basica"
            value={fecha1}
            onChange={setFecha1}
            />
            <DatePicker
            label="Fecha deshabilitada"
            value={fecha2}
            onChange={setFecha2}
            disabled
            />
            <DatePicker
            label="Fecha requerida"
            value={fecha1}
            onChange={setFecha1}
            required
            />
            </div>

            <div className="datepicker-group">
            <DatePicker
            label="Fecha de inicio"
            value={fechaInicio}
            onChange={setFechaInicio}
            max={fechaFin}
            size="small"
            />

            <DatePicker
            label="Fecha de fin"
            value={fechaFin}
            onChange={setFechaFin}
            min={fechaInicio}
            size="large"
            />
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
