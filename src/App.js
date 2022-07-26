import './App.css';
import Titulo from './components/app/Titulo';
import Header from './components/layout/Header';
import Lista from './components/app/Lista';
// import Contador from './components/app/contador';
import Jsx from './components/app/Jsx';

function App() {

  const test = 1;

  return (
    <div className="App">
      <Header  />
      <Titulo texto="Hola JSX" ejemplo="test" bool={test}/>
      {/* <Contador/>  */}
      <Jsx/>
      <Lista/>
    </div>
  );
}

export default App;

