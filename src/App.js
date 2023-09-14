import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LotteryResultNumberShow from "./components/LotteryResultNumberShow/LotteryResultNumberShow";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";

function App() {
  return (
    <div>
      <LotteryResultNumberShow />
      <Routes>
        <Route path="/payment" element={<PaymentMethods />} />
      </Routes>
    </div>
  );
}

export default App;
