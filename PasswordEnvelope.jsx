import { motion } from "framer-motion";
import "./PasswordEnvelope.css";

function PasswordEnvelope({ onOpen }) {
  return (
    <div className="envelope-wrapper">

      <motion.div
        className="envelope"
        initial={{ scale: 0.8, opacity: 0, rotateX: -25 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="back"></div>

        <motion.div
          className="flap"
          whileHover={{ rotateX: -180 }}
          transition={{ duration: 0.8 }}
        />

        <div className="letter">

          <h2>💌</h2>

          <p>
            Every beautiful story
            <br />
            deserves a magical beginning.
          </p>

          <button onClick={onOpen}>
            Open
          </button>

        </div>

      </motion.div>

    </div>
  );
}

export default PasswordEnvelope;