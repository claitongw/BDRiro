import React /**{useState}**/ from 'react';
import './global.css'
import Logon from './pages/Logon'

function App() {
  // let [counter, setCounter] = useState(0); // useState retorna um array [valor, funcaoAlteraValor]

  // function increment(){
  //   setCounter(counter + 1);
  // }

  return (
    // <div>
    //   <Header >Contador: {counter}</Header>
    //   <button onClick={increment}>Incrementar</button>
    // </div>
    <Logon></Logon>
  );
}

export default App;
