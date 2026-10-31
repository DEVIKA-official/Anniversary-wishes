import "./FloatingPetals.css";

function FloatingPetals() {

  const petals = [...Array(45)];

  return (

    <div className="petal-container">

      {petals.map((_, i) => (

        <span
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${12 + Math.random() * 10}s`,
            fontSize: `${14 + Math.random() * 20}px`
          }}
        >
          🌸
        </span>

      ))}

    </div>

  );

}

export default FloatingPetals;