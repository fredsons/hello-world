// Importando o Header criado
import {Header} from './components/Header';
// Importando o Footer criado
import { Footer } from './components/Footer';
// Componente React
const App = () => {  
  let name = "Fred";
  let age = 31;

  const handleClick = () => { // função para o click
    alert("Clicou na função.");
  }

  return ( // Usando prop no Header
    <div>

      <Header name={name} age={age} />  
      
      <button onClick = {handleClick}> Clique aqui </button> 
    

      <Footer/> 
    </div>
  )
}

export default App;