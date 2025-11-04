import "./App.css";
import { Button } from "./components/Button/Button";
import logo from "../public/vite.svg";
import NavBar from "./components/navbar/NavBar";
/**
 * Imperial UI - Base showcase component.
 * This serves as the visual entry point and identity of the component library.
 */
function App() {
  const navLinks = [
    {
      label: "Productos",
      icon: "🛍️",
      dropdown: [
        { label: "Producto 1", href: "/producto-1", icon: "💻" },
        { label: "Producto 2", href: "/producto-2", icon: "📱" },
        { label: "Producto 3", href: "/producto-3", icon: "⌚" },
      ],
    },
    { label: "Servicios", href: "/servicios", icon: "🛠️" },
    { label: "Acerca", href: "/acerca", icon: "ℹ️" },
    { label: "Contacto", href: "/contacto", icon: "📞" },
  ];
  const handleClick = () => {
    alert("¡Botón funcionando!");
  };

  // Estados para los DatePickers
  const [fecha1, setFecha1] = useState("");
  const [fecha2, setFecha2] = useState("");
  const [fechaInicio, setFechaInicio]= useState("");
  const [fechaFin, setFechaFin]= useState("");
  return (
    <div className="imperial-app">
      <NavBar
        brand="Imperial UI"
        links={navLinks}
        logo={logo}
        fixed={true}
        className="custom-navbar"
      ></NavBar>

      {/* Margen superior para el navbar fijo */}
      <div className="main-content">
        <header className="imperial-header">
          <h1>🧱 Imperial UI</h1>
          <p>Librería de componentes reutilizables de Imperial Net</p>
        </header>

        <main className="imperial-main">
          <p>🚀 Proyecto iniciado correctamente.</p>
          <section className="component-showcase">
            <h2>Button Component</h2>

            <div className="button-group">
              <Button onClick={handleClick}>Primary Button</Button>

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
              <Button disabled>Disabled Button</Button>
            </div>
          </section>
        </main>

        <footer className="imperial-footer">
          <small>Imperial Net © 2025 — Internal Component Library</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
