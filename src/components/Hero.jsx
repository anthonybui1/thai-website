import hero from '../branding/hero.jpg'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mx-3">
      <h1 className="text-4xl my-6 mx-10 text-center">serving austin with <pre className="animate-bounce mt-3 mb-1">❤️</pre> since 2010</h1>
      <img src={hero} className="flex-1 opacity-90 rounded w-11/12 max-w-screen-lg shadow-2xl"/>
    </div>
  );
}

export default Hero;