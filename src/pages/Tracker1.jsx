import Navbar from '../components/molecules/navbarTracker/Navbar.jsx';
import Tracker0Mol from '../components/molecules/tracker0-mol/Tracker0Mol.jsx';
import Tracker1Mol from  '../components/molecules/tracker1-mol/Tracker1Mol.jsx';
import '../App.css';

const Tracker1 = () => {
  return (
    <>
      <Navbar></Navbar>
      <Tracker0Mol></Tracker0Mol>
      <Tracker1Mol></Tracker1Mol>
   </>
  )
}

export default Tracker1;