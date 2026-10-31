import { useEffect, useState } from "react";
import "./FairyDust.css";

function FairyDust() {

  const [particles, setParticles] = useState([]);

  useEffect(() => {

    const move = (e) => {

      const particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY
      };

      setParticles(prev => [...prev.slice(-35), particle]);

      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== particle.id));
      }, 1400);

    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return (

    <div className="fairy-container">

      {particles.map(p => (

        <span
          key={p.id}
          className="spark"
          style={{
            left: p.x,
            top: p.y
          }}
        />

      ))}

    </div>

  );

}

export default FairyDust;