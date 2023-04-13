import {useState} from "react"

import { motion } from "framer-motion"

const useSelectMonedas = (label, opciones) => {
  
  const [state, setState] = useState("")
  
  const SelectMonedas = () => {
    return (
    <motion.div initial={{opacity:0, x:15}} whileInView={{opacity:1, x:0}} >
     <label className="w-full text-lg my-4 ml-2"> {label} </label>
     
     <select 
      className="w-full mx-2 my-4 duration-300 rounded-md p-2 text-lg bg-purple-200  hover:bg-purple-400 text-black"
      value = {state}
      onChange = { e => setState( e.target.value )}
     >
       <option value=""> Seleccione </option>
       {
         opciones.map(opcion => (
            <option value={opcion.id} key={opcion.id}> {opcion.nombre} </option>
         ))
       }
     </select>
    </motion.div>
    )
  }
  
  return [state, SelectMonedas]
  
}

export default useSelectMonedas