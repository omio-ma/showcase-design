import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1715835441810-38bcd2756da6?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Left"
          className="image"
        />
      </div>
      <div className="image-container">
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
