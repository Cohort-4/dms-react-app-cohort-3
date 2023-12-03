import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Dashboard } from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
