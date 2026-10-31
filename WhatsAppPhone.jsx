import { motion } from "framer-motion";
import "./WhatsAppPhone.css";

function WhatsAppPhone({ onEnter }) {

  return (

    <motion.div

      className="phoneScene"

      initial={{
        opacity:0,
        scale:.75,
        y:180
      }}

      animate={{
        opacity:1,
        scale:1,
        y:0
      }}

      transition={{
        duration:1.8,
        ease:[0.22,1,0.36,1]
      }}

    >

      <motion.div

        className="phone"

        animate={{
          y:[0,-12,0],
          rotate:[0,-1,1,0]
        }}

        transition={{
          duration:8,
          repeat:Infinity,
          ease:"easeInOut"
        }}

      >

        <div className="cameraIsland"></div>


        <div className="header">

          <div>

            <h3>
              IEEE Student Community
            </h3>

            <span>
              142 Participants
            </span>

          </div>


          <div className="onlineDot"></div>


        </div>


        <div className="chatArea">


          <motion.div

            className="leftBubble"

            initial={{
              opacity:0,
              x:-40
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              delay:1
            }}


            whileHover={{
              scale:1.06
            }}


            whileTap={{
              scale:.96
            }}


            animate-hover={{
              x:[0,-3,3,-3,0]
            }}


            onClick={onEnter}


          >

            Hello 👋


            <motion.div

              className="clickBadge"

              animate={{

                y:[0,-5,0]

              }}

              transition={{

                duration:1.5,
                repeat:Infinity

              }}

            >

              Click Me ✨

            </motion.div>


          </motion.div>



          <motion.div

            className="typing"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:2
            }}

          >

            <span></span>
            <span></span>
            <span></span>

          </motion.div>



          <motion.div

            className="tapHint"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:[0,1,.5,1]
            }}

            transition={{

              delay:3,
              duration:2,
              repeat:Infinity

            }}

          >

            👆 Tap Hello to continue

          </motion.div>


        </div>


      </motion.div>


    </motion.div>

  );

}

export default WhatsAppPhone;