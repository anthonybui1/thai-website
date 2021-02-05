import hero from '../branding/hero.jpg'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6 mx-3">
      <h1 className="text-4xl my-10 mx-10 text-center">Serving Austin city limits since 1983 ^.^</h1>
      <img src={hero} className="flex-1 opacity-90 rounded h-96 w-auto shadow-2xl"/>
    </div>
  );
}

export default Hero;