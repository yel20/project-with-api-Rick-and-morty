import { useState } from "react";
import Formulario from "./components/Formulario";
import PintarDato from "./components/PintarDato";

const App = () => {
  const [nombrePersonajes, setNombrePersonajes] = useState("");

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-2 text-white">Rick and Morty</h1>
      <Formulario setNombrePersonajes={setNombrePersonajes} />
      <PintarDato nombrePersonajes={nombrePersonajes} />
    </div>
  );
};

export default App;
