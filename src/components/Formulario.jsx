import Swal from "sweetalert2"
import {useState} from 'react'



const Formulario = ({setNombrePersonajes}) => {
    
    const [todo, setTodo] = useState({
        nombre : ""
    })

    const handleChange = (e) => {
        const {name,value} = e.target

       setTodo((old)=>({
        ...old,
        [name] : value
       })) 
    }


    const reset = () =>{
        setTodo({
            nombre:""
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!todo.nombre.trim()){
            return Swal.fire({
                title:"Error!",
                text:"No dejar campo en blanco",
                icon:"error"
            })
        }
        setNombrePersonajes(todo.nombre)
        reset()
    }
    

  return (
    <>
        <form onSubmit={handleSubmit} className="text-center mb-5">
            <input 
                type="text" 
                placeholder='Ingrese personaje'
                name='nombre'
                value={todo.nombre}
                onChange={handleChange}
                className="form-control mb-3"
                />
            <button className='btn  mb-2 '>Search</button>
        </form>
    </>
  )
}

export default Formulario