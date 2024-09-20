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
    backgroundColor: "#f0f4f8", // สีพื้นหลังอ่อน ๆ
    margin: 0
  };

  const cardStyle = {
    border: "2px solid #3498db", // ขอบสีน้ำเงินสวยงาม
    borderRadius: "15px", // ขอบโค้งมน
    padding: "20px",
    width: "500px",
    height: "500px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // เพิ่มเงาให้การ์ดดูมีมิติ
    backgroundColor: "white" // พื้นหลังสีขาว
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
    transform: "translate(-50%, -50%)",
    transition: "all 0.3s ease-in-out" // แอนิเมชันนุ่มนวลเมื่อขนาดภาพเปลี่ยน
  };

  const buttonImageStyle = {
    width: "100px",
    height: "100px",
    cursor: "pointer",
    margin: "10px",
    borderRadius: "50%", // ทำปุ่มเป็นวงกลม
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // เพิ่มเงาให้ปุ่ม
    transition: "transform 0.2s ease-in-out", // เพิ่มแอนิเมชันให้ปุ่มเมื่อกด
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  };

  const buttonText = {
    fontSize: "16px",
    marginTop: "10px",
    cursor: "pointer",
    color: "#3498db", // สีฟ้าให้เข้ากับขอบ
    fontWeight: "bold", // ทำให้ข้อความเด่นขึ้น
    textTransform: "uppercase" // ข้อความทั้งหมดเป็นตัวพิมพ์ใหญ่
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
