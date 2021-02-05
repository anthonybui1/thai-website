import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <div className="max-w-screen-2xl">
        <Hero />
      </div>
    </div>
  );
}

export default App;
