import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./tailwind.css";

function App() {
  return (
    <>
      <Header />
      <div className="h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default App;
