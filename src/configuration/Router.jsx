import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tracker0 from "../components/molecules/tracker0/Tracker0";

function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tracker" element={<Tracker0/>}></Route>
    </Routes>
</BrowserRouter>
  )
}

export default Router