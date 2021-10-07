import { useState } from 'react';

// Importando o Header criado
import {Header} from './components/Header';
// Importando o Footer criado
import { Footer } from './components/Footer';



// Componente React
const App = () => {  
  const [name, setName] = useState('Fred');
  const [age, setAge] = useState(90);
  const [bg, setBg] = useState('#FF0000');

  const [list, setList] = useState([
    "O rato roeu a roupa do rei de roma",
    "Aqui vai uma frase poética",
    "a inspiração é pouca"
  ]);

  const handle20 = () => { // função para o click com useState
    setAge(20);
    setBg("#00FF00")
  }

  const handle90 = () => { // função para o click com useState
    setAge(90);
    setBg("#FF0000")
  }

  return ( // Usando prop no Header
    <div style={{backgroundColor: bg}}>

      <Header name={name} age={age} />  

      {age === 90 &&
        <button onClick = {handle20}>Tenho 20 anos </button> // condição do botão
      }
      
      {age === 20 &&
        <button onClick = {handle90}>Tenho 90 anos </button>
      }

      <hr />

      <ul>
        {list.map((frase, index)=>( // função map passando um array
          <li key={index}>{frase}</li>
        ))}
      </ul>
      
    

      <Footer/> 
    </div>
  )
}

export default App;