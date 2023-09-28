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
import PlanBici from "./components/PlanPage/PlanBici"
import PlanMoto from "./components/PlanPage/PlanMoto"
import TrabajaConNosotros from "./components/Trabaja/TrabajaConNosotros";
import PlanProyecto from './components/PlanPage/PlanProyecto'
import TrabajaHome from "./components/Trabaja/TrabajaHome";

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
        <Route path="/planbici" element={<PlanBici/>}/>
        <Route path="/planmoto" element={<PlanMoto/>}/>
        <Route path="/trabajaconnosotros" element={<TrabajaConNosotros/>} />
        <Route path="/planproyecto" element={<PlanProyecto/>}/>
        <Route path='/trabajahome' element={<TrabajaHome/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
