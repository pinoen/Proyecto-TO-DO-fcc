import './App.css';
import Logo from './componentes/Logo';
import Lista from './componentes/Lista';

function App() {
  return (
    <div className="to-do-app">
      <Logo />
      <div className='lista-tareas'>
        <h1>Mis tareas</h1>
        <Lista />
      </div>
    </div>
  );
}

export default App;
