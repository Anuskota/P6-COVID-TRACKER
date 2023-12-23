import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from '../components/molecules/Navbar.jsx';
import Tracker0 from '../components/molecules/tracker0/Tracker0.jsx';
import '../App.css';

const MainTracker = () => {
  return (
    <>
      <Navbar></Navbar>
      <Tracker0></Tracker0>
   </>
  )
}

export default MainTracker