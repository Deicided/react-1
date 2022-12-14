import './App.css';
import Testimonio from "./componentes/testimonios.js";
import Header from './componentes/header';

function App() {
  return (
    <div className="App">
        <div className='contenedor-principal'>

      

      <Testimonio 
          nombre="Conciencia"
          pais="cerebro"
          imagen="cerebro1"
          cargo="aqui encontraras todo sobre la mente,"
          empresa="y mucho mas"
          Testimonio="Parte superior y más voluminosa del encéfalo, constituida por una masa de tejido nervioso y que se ocupa de las funciones cognitivas y emotivas y del control de actividades vitales como los movimientos, el sueño, el hambre, etc
          el cerebro humano pesa alrededor de kg y está constituido por dos hemisferios separados longitudinalmente por una gran "
      /> 
      <Testimonio 
          nombre="Nombre o titutooooo"
          pais="algun pais mientras tanto."  
          imagen="cerebro2"
          cargo="cargoo mientras se coloca otra cosa."
          empresa="empresa mientras tambien."
          Testimonio="Parte superior y más voluminosa del encéfalo, constituida por una masa de tejido nervioso y que se ocupa de las funciones cognitivas y emotivas y del control de actividades vitales como los movimientos, el sueño, el hambre, etc. el cerebro humano pesa alrededor de kg y está constituido por dos hemisferios separados longitudinalmente por una gran"
          />
      <Testimonio
      
          nombre="siguiente nombreeee"
          pais="otra informacionesss"
          imagen="cerebro5"
          cargo="otra inforamcion de cargo o otra cosa."
          empresa="colocar otras descripciones aquiii"
          Testimonio="Parte superior y más voluminosa del encéfalo, constituida por una masa de tejido nervioso y que se ocupa de las funciones cognitivas y emotivas y del control de actividades vitales como los movimientos, el sueño, el hambre, etc. el cerebro humano pesa alrededor de kg y está constituido por dos hemisferios separados longitudinalmente por una gran"
  
      />

        </div>
    </div>
  );
}

export default App;
