import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["public/images/รูปภาพ1.jpg", "public/images/Screenshot 2024-07-16 234205.png"];
  const buttonImages = ["public/images/โม.jpg", "public/images/รูปภาพ2.jpg", "public/images/รูปภาพ3.jpg"];
  
  const increaseLevel = (increment) => {
    setLevel((prevLevel) => {
      const newLevel = prevLevel + increment;
      if (newLevel >= 100) {
        setImageIndex(1); 
      }
      return newLevel;
    });
  };

  const imageSize = `${Math.max(level * 5, 45)}px`;

  // Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    margin: 0
  };

  const cardStyle = {
    border: "2px dashed",
    padding: "20px",
    width: "500px",
    height: "500px",
    position: "relative",
    overflow: "hidden"
  };

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };

  const buttonImageStyle = {
    width: "100px",
    height: "100px",
    cursor: "pointer",
    margin: "10px"
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  };

  const buttonText = {
    color: "#34495e",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "10px"
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#2c3e50", fontSize: "36px" }}>Level {level}</h1>

        <div style={cardStyle}>
          <img src={images[imageIndex]} alt="animal" style={imageStyle} />
        </div>

        <div style={buttonContainerStyle}>
          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[0]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(10)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(10)} style={buttonText}>
              Level +10
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[1]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(20)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(20)} style={buttonText}>
              Level +20
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[2]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(30)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(30)} style={buttonText}>
              Level +30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
