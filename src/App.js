
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/loginregister/Login";
import Register from "./pages/loginregister/Register";
import BuyPulsa from "./pages/product/BuyPulsa";
import BuyVoucher from "./pages/product/BuyVoucher";
import PayPLN from "./pages/product/PayPLN";
import VoucherNominal from "./pages/product/VoucherNominal";
import Transaction from "./pages/transaction/ChoosePayment";
import Pay from "./pages/transaction/Pay";
import TransactionDetail from "./pages/transaction/TransactionDetail";
import PayLoading from "./pages/transaction/PayLoading"
import TransactionSuccess from "./pages/transaction/TransactionSuccess";
import OrderLoading from "./pages/transaction/OrderLoading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="buypulsa" element={<BuyPulsa />}></Route>
        <Route path="buyvoucher" element={<BuyVoucher />}></Route>
        <Route path="selectvoucher" element={<VoucherNominal />}></Route>
        <Route path="paypln" element={<PayPLN />}></Route>
        <Route path="transaction" element={<Transaction />}></Route>
        <Route path="pay" element={<Pay />}></Route>
        <Route path="paymentprocess" element={<PayLoading />}></Route>
        <Route path="success" element={<TransactionSuccess />}></Route>
        <Route path="detail" element={<TransactionDetail />}></Route>
        <Route path="orderloading" element={<OrderLoading />}></Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
