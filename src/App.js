import './App.css';
import Titulo from './components/app/Titulo';
import Header from './components/layout/Header';
import Lista from './components/app/Lista';
// import Contador from './components/app/contador';
import Jsx from './components/app/Jsx';
import Formularios from './components/app/Formularios';
import FormHook from './components/app/FormHook';

function App() {

  const test = 1;

  return (
    <div className="container mt-5">
      <Header  />
      {/* <Titulo texto="Hola JSX" ejemplo="test" bool={test}/> */}
      {/* <Contador/>  */}
      {/* <Jsx/> */}
      {/* <Lista/> */}
      {/* <Formularios/> */}
      <FormHook/>
    </div>
  );
}

export default App;

