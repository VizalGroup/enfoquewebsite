import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LotteryResultNumberShow from "./components/LotteryResultNumberShow/LotteryResultNumberShow";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";
import Nav from '../src/components/Nav/Nav'
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";
import ElectroPlan from "./components/PlanPage/ElectroPlan";
import EnfoquePlan from "./components/PlanPage/EnfoquePlan";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/loterry' element={<LotteryResultNumberShow/>}/>
        <Route path="/payment" element={<PaymentMethods />} />
        <Route path="/electroplan" element={<ElectroPlan />} />
        <Route path= "/enfoqueplan" element={<EnfoquePlan />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
