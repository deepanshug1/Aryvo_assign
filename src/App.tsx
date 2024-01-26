import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import User from "./pages/User";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
