import Cards from "../components/molecules/cardsHomePage/cards";
import Footer from "../components/molecules/footer/Footer"
import Header from "../components/molecules/headerHomePage/Header";
import NavbarHome from "../components/molecules/navbarHomePage/NavbarHome";

const Home = () => {
  return (
    <>    
    <NavbarHome/>  
    <Header/>
    <Cards/>
    <Footer/>
    </>
  )
}

export default Home;