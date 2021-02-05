import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import BigButton from './components/BigButton.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  const orderLink = "https://direct.chownow.com/order/20484/locations/29585"

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="max-w-screen-2xl flex flex-col items-center space-y-12">
        <Hero />
        <BigButton text="get delivery now!" link={orderLink}/>
        <Showcase />
        <BigButton text="see more" link="/"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
