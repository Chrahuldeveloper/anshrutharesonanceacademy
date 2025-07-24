import { Gallery, Home ,Faculty} from "./pages";
import { Routes, Route } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Gallery />} path="/gallery" />
        <Route element={<Faculty />} path="/faculty" />
      </Routes>
    </>
  );
}
