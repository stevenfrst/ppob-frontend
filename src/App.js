import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyPulsa from "./pages/BuyPulsa";
import BuyVoucher from "./pages/BuyVoucher";
import SelectVoucher from "./pages/SelectVoucher";
import PayPLN from "./pages/PayPLN";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="buypulsa" element={<BuyPulsa />}></Route>
        <Route path="buyvoucher" element={<BuyVoucher />}></Route>
        <Route path="selectvoucher" element={<SelectVoucher />}></Route>
        <Route path="paypln" element={<PayPLN />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
