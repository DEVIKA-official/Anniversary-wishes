import { useState } from "react";
import { motion } from "framer-motion";
import "./StoryBook.css";

function StoryBook({ onOpen }) {
  // Local state controls when the user triggers the book opening action sequence
  const [isFlipped, setIsFlipped] = useState(false);

  const handleOpenClick = () => {
    setIsFlipped(true);
    // Triggers the parent view transition right as the flip animation reaches its maximum peak rotation
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <motion.div
      className={`storybookWrapper ${isFlipped ? "bookIsOpening" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(15px)"
      }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="magicBook"
        initial={{
          scale: 0.35,
          rotateX: 65,
          y: 250,
          opacity: 0
        }}
        animate={{
          scale: 1,
          rotateX: 0,
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.4,
          type: "spring"
        }}
        whileHover={!isFlipped ? {
          scale: 1.04,
          rotate: -1
        } : {}}
      >
        <div className="bookGlow"></div>

        {/* Static left cover base page component */}
        <div className="leftPage"></div>

        {/* Dynamic Right Cover Page: Rotates dynamically on the Y-Axis edge like a real book cover spine */}
        <motion.div
          className="rightPage"
          animate={isFlipped ? { 
            rotateY: -160, 
            zIndex: 5,
            filter: "brightness(0.7)"
          } : {}}
          whileHover={!isFlipped ? {
            rotateY: -18
          } : {}}
          transition={{ 
            duration: 0.9, 
            ease: [0.645, 0.045, 0.355, 1] 
          }}
          style={{ transformOrigin: "left center" }} // Enforces structural hinge anchor point
        />

        {/* Book Text Contents */}
        <motion.div 
          className="bookContent"
          animate={isFlipped ? { opacity: 0, y: -20 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="chapter">Chapter 01</span>
          <h1>The Beginning</h1>
          <h3>14 September 2022</h3>
          
          <p>
            One simple "Hello"
            started a friendship
            that would become
            a beautiful story...
          </p>

          <motion.button
            whileTap={{ scale: 0.94 }}
            whileHover={{ scale: 1.06 }}
            onClick={handleOpenClick}
          >
            Open Story ✨
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default StoryBook;
