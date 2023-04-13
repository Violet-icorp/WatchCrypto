const Resultado = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE, CHANGEPCT24HOUR, IMAGEURL } = resultado
  return (
    <>
    <div className="my-8 px-12 w-full text-left">
    <h3 className="text-3xl font-medium"> Results:  </h3>
    </div>
    <div className="w-full flex flex-col justify-center px-8 text-xl pb-8 ">
      <div className="flex md:ml-14 gap-8 items-center justify-center w-full">
      <div className="w-[40vw]">
      <img className="object-cover " src={`https://cryptocompare.com/${IMAGEURL}`} alt={IMAGEURL}/>
      </div>
      <div className="flex flex-col">
      <p> Precio: <span className="text-purple-300"> {PRICE} </span> </p>
      <p> Precio mas alto: <span className="text-purple-300"> {HIGHDAY} </span> </p>
      <p> Precio mas bajo: <span className="text-purple-300"> {LOWDAY} </span> </p>
      <p> Ultima Actualización: <span className="text-purple-300"> {LASTUPDATE} </span> </p>
      <p> Porcentaje de cambio: <span className="text-purple-300"> {CHANGEPCT24HOUR}% </span> </p>
      </div>
      </div>
    </div>
    </>
    )
}

export default Resultado