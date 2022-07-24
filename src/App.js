import './App.css';
import Titulo from './components/app/Titulo';
import Header from './components/layout/Header';

function App() {

  const test = 1;

  return (
    <div className="App">
      <Header  />
      <Titulo texto="Primer Titulo" ejemplo="test" bool={test}/>
    </div>
  );
}

export default App;

