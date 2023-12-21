import './App.css';
import Navbar from './components/molecules/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Top10 from './components/atoms/top10.jsx';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Top10></Top10>

    </>
  );
}

export default App;
