import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
