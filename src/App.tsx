import "./App.css";
import React from "react";

function App() {
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    container: HTMLDivElement
  ) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const moveX = (x - 0.5) * 30; // Adjust the multiplier for more/less movement
    const moveY = (y - 0.5) * 30; // Adjust the multiplier for more/less movement
    container.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = (container: HTMLDivElement) => {
    container.style.transform = "scale(1)";
  };

  return (
    <div className="container">
      <div
        className="image-container"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
      >
        <img
          src="https://images.unsplash.com/photo-1715835441810-38bcd2756da6?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Left"
          className="image"
        />
      </div>
      <div
        className="image-container"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
      >
        <img
          src="https://images.unsplash.com/photo-1608609530003-8343fc69c2f6?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Right"
          className="image"
        />
      </div>
    </div>
  );
}

export default App;
