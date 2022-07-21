import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "containers/Login/Lazy";
import Signup from "containers/Signup/Lazy";
import PrivateRoutes from "containers/Auth";
import GlobalStyles from "styles/Global";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PrivateRoutes />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};
export default App;
