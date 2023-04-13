import Layout from "./hocs/Layout"
import Form from "./components/Form"
import Resultado from "./components/Resultado"

import Header from "./components/Header"

import { useState, useEffect } from "react"

const App = () => {
  
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  
  useEffect(() => {
  if ( Object.keys(monedas).length > 0 ) {
    const cotizarCripto = async () => {
      const {moneda, cripto} = monedas 
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setResultado(resultado.DISPLAY[cripto][moneda])
    }
    cotizarCripto()
  }
  },[monedas])
  
  return (
      <Layout>
        <Header/>
        <div className="w-full bg-gray-800 text-white flex flex-col py-8 items-center justify-center py-8 gap-4">
          <Form 
            setMonedas = {setMonedas}
          />
          {resultado.PRICE && <Resultado resultado={resultado}/>}
        </div>
      </Layout>
    )
}

export default App