import {useState} from 'react';
import Formulario from './Components/Formulario.jsx';
import Listado from './Components/Listado.jsx';
import { ChakraProvider, Button } from '@chakra-ui/react';


function App() {
  const [personas, setPersonas] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <ChakraProvider>
        <Formulario 
          personas={personas}
          setPersonas={setPersonas}
        />
        <Listado
          personas={personas}
        />
      </ChakraProvider>
    </div>
  );
}

export default App;