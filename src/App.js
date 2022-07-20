import QRCode from "react-qr-code";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <QRCode value="conexionfacil.hellomexico.mx" bgColor="transparent" size="600"/>
      </header>
    </div>
  );
  
}

export default App;
