import HomeCard from './HomeCard.jsx';
import padthai from '../branding/padthai.jpg';
import friedrice from '../branding/friedrice.jpg';
import curry from '../branding/curry.jpg';
import mango from '../branding/mango.jpg';

const Showcase = () => {
  const caption1 = "thin rice noodle stir-fried with egg, preserved radish, bean sprouts, green onions, and sweet tamarind sauce. topped with fresh bean sprouts and crushed peanuts"
  const caption2 = "thai style fried rice with egg, tomatoes, carrots, green peas, yellow and green onions"
  const caption3 = "classic spicy and tangy broth with chili, lime, lemongrass, yellow onions, tomatoes, and mushrooms. topped with green onions. served without rice."
  const caption4 = "everyone's favorite. made with coconut milk, sugar, salt, and mango cubes."

  return (
    <div className="flex flex-col items-center space-y-10">
      <HomeCard img={padthai} descript={caption1} title="pad thai" price="13" />
      <HomeCard img={friedrice} descript={caption2} title="thai fried rice" price="12" />
      <HomeCard img={curry} descript={caption3} title="tom yum soup" price="16" />
      <HomeCard img={mango} descript={caption4} title="sticky rice with mango" price="8" />
    </div>
  );
}

export default Showcase;