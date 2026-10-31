import { motion } from "framer-motion";
import "./PhoneTransition.css";

function PhoneTransition({ onComplete }) {

  return (

    <motion.div

      className="transitionScene"

      initial={{ opacity:0 }}

      animate={{ opacity:1 }}

      exit={{ opacity:0 }}

      transition={{ duration:1 }}

    >

      <motion.div

        className="zoomLight"

        animate={{

          scale:[1,5],
          opacity:[0,.8,0]

        }}

        transition={{

          duration:2.8

        }}

        onAnimationComplete={onComplete}

      />

      {

      [...Array(120)].map((_,i)=>(

        <motion.span

          key={i}

          className="warpStar"

          style={{

            left:`${Math.random()*100}%`,
            top:`${Math.random()*100}%`

          }}

          animate={{

            scale:[0,12],
            opacity:[1,0]

          }}

          transition={{

            duration:2+Math.random(),
            repeat:Infinity,
            delay:Math.random()*2

          }}

        />

      ))

      }

    </motion.div>

  );

}

export default PhoneTransition;