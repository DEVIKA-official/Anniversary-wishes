import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./PasswordGate.css";

function PasswordGate({ onSuccess }) {

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUnlock = () => {

    const valid = /^21010[0-9]$/;

    if (valid.test(password)) {

      setError("");
      onSuccess();

    } else {

      setError("The stars don't recognize this birthdate ✨");

    }

  };

  return (

    <AnimatePresence>

      <motion.div
        className="gateOverlay"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >

        <motion.div
          className="gateGlass"
          initial={{ y:80, scale:.8, opacity:0 }}
          animate={{ y:0, scale:1, opacity:1 }}
          transition={{ duration:1 }}
        >

          <div className="moonRing"></div>

          <h2>✨ Secret Garden ✨</h2>

          <p className="subtitle">

            Enter your birthdate to unlock this magical story

          </p>

          <input
            type="password"
            value={password}
            maxLength={6}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="••••••"
          />

          <button onClick={handleUnlock}>

            Unlock Story

          </button>

          <span className="error">

            {error}

          </span>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );

}

export default PasswordGate;