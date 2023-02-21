import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "./Loading";
import Personaje from "./Personaje";

const PintarDato = ({ nombrePersonajes }) => {
  const [personaje, setPersonaje] = useState([]);
  const [loading, setLoading] = useState(false)

  const fecthApi = async (nombre) => {
    setLoading(true)
    try {
      
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
      );

      if (!res.ok) {
        return Swal.fire({
          title: "Error!",
          text: "Personaje no encontrado",
          icon: "error",
        });
      }
      const data = await res.json();
      
      setPersonaje(data.results);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  useEffect(() => {
    fecthApi(nombrePersonajes);
  }, [nombrePersonajes]);

  if(loading){
    return <Loading/>
  } 

  return (
    <div className="row mb-2">
      
      {
        personaje.map(item => (
          <Personaje key={item.id} item={item}/>
        ))
      }

    </div>
  )

};

export default PintarDato;
