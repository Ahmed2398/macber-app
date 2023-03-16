import React from 'react'
import partners from '../../assets/images/newsectionpartners.png';
import {motion} from "framer-motion";

const Partners = () => {
  return (
    <>
      <motion.section
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, type: 'tween' }}
          className="clients landsape ptb-60 " id="Partners"
      >
    <div className="">

    <img src={partners} className="rounded" width="100%"/>
    </div>
  </motion.section>
    </>
  )
}

export default Partners