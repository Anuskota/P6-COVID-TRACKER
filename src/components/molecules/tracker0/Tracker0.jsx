import InfoTracker from "../../atoms/track-0/InfoTracker";
import Top10 from "../../atoms/track-0/Top10";
import Navbar from '../Navbar';
import './tracker0.css'

const Tracker0 = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="tracker0">
    <h2>COVID-19 Tracker</h2>
    <InfoTracker></InfoTracker>
    <InfoTracker></InfoTracker>
    <InfoTracker></InfoTracker>
    <InfoTracker></InfoTracker>
    <h4>Top 10 Country</h4>
    <Top10></Top10>
    <Top10></Top10>
    <Top10></Top10>
    <Top10></Top10>
    <Top10></Top10>
    <Top10></Top10>
    <Top10></Top10>
    <Top10></Top10>
    <Top10></Top10>
    <Top10></Top10>
    </div>
    </>
  )
}

export default Tracker0