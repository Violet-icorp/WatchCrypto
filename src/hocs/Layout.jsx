import Navbar from "../components/navigation/Navbar"
import Footer from "../components/navigation/Footer"

import { motion } from "framer-motion"

const Layout = (props) => {
  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:.2 }} className="bg-gray-300">
      <Navbar/>
        {props.children}
      <Footer/>
    </motion.div>
    )
}

export default Layout