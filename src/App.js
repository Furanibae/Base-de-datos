import { useState } from "react"
import Header from "./components/Header";
import ColaboradoresApp from "./ColaboradoresApp"

function App() {
  const [termino, setTermino] = useState("");
  return (
    <div className="App">
      <header>
    <Header setTermino={setTermino}/>
    <ColaboradoresApp termino={termino}/>
      </header>

    </div>
  );
}

export default App;
