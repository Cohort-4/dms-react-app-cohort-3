import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Dashboard, ForgotPassword } from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
