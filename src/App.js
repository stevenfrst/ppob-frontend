import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/loginregister/Login";
import Register from "./pages/loginregister/Register";
import BuyPulsa from "./pages/product/BuyPulsa";
import BuyVoucher from "./pages/product/BuyVoucher";
import PayPLN from "./pages/product/PayPLN";
import VoucherNominal from "./pages/product/VoucherNominal";
import ChoosePayment from "./pages/transaction/ChoosePayment";
import Pay from "./pages/transaction/Pay";
import TransactionDetail from "./pages/transaction/TransactionDetail";
import User from "./pages/home/User";
import Verification from "./pages/home/Verification";
import History from "./pages/home/History";
import Logout from "./pages/loginregister/Logout";
import InvalidToken from "./pages/home/InvalidToken";
import { ForgotPassword } from "./pages/loginregister/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="buypulsa" element={<BuyPulsa />}></Route>
        <Route path="buyvoucher" element={<BuyVoucher />}></Route>
        <Route
          path="/buyvoucher/selectvoucher"
          element={<VoucherNominal />}
        ></Route>
        <Route path="paypln" element={<PayPLN />}></Route>
        <Route path="choosepayment" element={<ChoosePayment />}></Route>
        <Route path="payment" element={<Pay />}></Route>
        <Route path="payment/detail" element={<TransactionDetail />}></Route>
        <Route path="logout" element={<Logout />}></Route>
        <Route path='user' element={<User/>}></Route>
        <Route path='verification' element={<Verification/>}></Route>
        <Route path='history' element={<History/>}/>
        <Route path="tokenexpired" element={<InvalidToken/>}/>
        <Route path="forgotpassword" element={<ForgotPassword/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
