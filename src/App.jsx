import "./index.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-7xl px-4 py-10">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
