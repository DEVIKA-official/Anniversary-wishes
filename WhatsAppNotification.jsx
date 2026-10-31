import { motion } from "framer-motion";
import "./WhatsAppNotification.css";

function WhatsAppNotification({ onFinish }) {

  return (

    <motion.div

      className="notification"

      initial={{
        y:-120,
        opacity:0
      }}

      animate={{
        y:0,
        opacity:1
      }}

      exit={{
        opacity:0,
        y:-80
      }}

      transition={{
        duration:.9
      }}

      onAnimationComplete={()=>{

        setTimeout(()=>{

          onFinish();

        },2800);

      }}

    >

      <div className="leftIcon">

        💬

      </div>

      <div className="content">

        <h3>

          IEEE Student Community

        </h3>

        <p>

          New Messages • Just now

        </p>

      </div>

    </motion.div>

  );

}

export default WhatsAppNotification;