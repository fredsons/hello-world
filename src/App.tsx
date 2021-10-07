// Importando o Header criado
import {Header} from './components/Header';
// Importando o Footer criado
import { Footer } from './components/Footer';
// Componente React
const App = () => {  
  let name = "Fred";
  let age = 31;

  return ( // Usando prop no Header
    <div>
     <Header name={name} age={age} />  

    <button> Clique aqui</button>
    
     <Footer/>
    </div>
  )
}

export default App;