import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
