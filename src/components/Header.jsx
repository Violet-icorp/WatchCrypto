import { Link } from "react-router-dom"

import { motion } from 'framer-motion'

import hero from '../assets/hero.jpg'

const Header = () => {
  return (
    <>
    <div className="w-full h-screen absolute top-0 right-0">
      <img className="w-full h-full object-cover opacity-[45%] -z-10" src={hero} alt="hero" />
    </div>
    <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} className="w-full h-screen justify-center items-left flex px-8 flex-col gap-y-4">

      <h1 className="text-8xl">
        price with crypto
      </h1>
      <h3 className="w-[75vw] mt-4">
        conoce los ultimos precios del blockchain!!!
      </h3>
    </motion.div>
    </>
    )
}

export default Header