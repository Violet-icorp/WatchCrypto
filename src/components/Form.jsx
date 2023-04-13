import cryptocurrency from '../assets/cryptocurrency.png'
import useSelectMonedas from "../hooks/useSelectMonedas"

import { useState, useEffect } from "react"

import {monedas} from '../data/monedas'

const Form = ({setMonedas}) => {
  
  useEffect(() => {
    const consultarApi = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      const arrayCryptos = resultado.Data.map(crypto => {
        const objeto = {
          id: crypto.CoinInfo.Name,
          nombre: crypto.CoinInfo.FullName
        }
        return objeto
      })
      setCryptos(arrayCryptos)
    }
    consultarApi();
  }, [])
  
  const [criptos, setCryptos] = useState([])
  
  const [ moneda, SelectMonedas ] = useSelectMonedas('Elije tu moneda', monedas)
  
  const [ cripto, SelectCripto ] = useSelectMonedas('Elije tu criptomoneda', criptos)
  
  const [error, setError] = useState(false)
  
  const handleSubmit = e => {
    e.preventDefault()
    
    if ([moneda, cripto].includes("")) {
      setError(true)
      return
    }
    
    setError(false)
    setMonedas({
      moneda,
      cripto
    })
    
  }
  
  return (
    <div className="flex w-full py-4 flex-col md:flex-row justify-center items-center">
      <form 
        onSubmit={handleSubmit}
        className="rounded flex flex-col items-center justify-center w-[82vw] mx-4 md:w-[60%] ">
        {error && <p className="w-full text-white bg-red-600 p-4 text-2xl"> Todos los carácteres son obligatorios </p>}
        <SelectMonedas/>
        <SelectCripto/>
        <input className="w-[90%] mt-4 rounded-lg uppercase font-bold text-lg h-14 text-white bg-purple-500 hover:bg-purple-700" type="submit" value="Cotizar"/>
      </form>
    </div>
    
    )
}

export default Form