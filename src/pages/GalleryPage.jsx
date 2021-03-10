import ImageGridItem from '../molecules/ImageGridItem';
import friedrice from '../assets/friedrice.jpg';
import padthai from '../assets/padthai.jpg';
import tomyum from '../assets/tomyum.jpg';
import friedfish from '../assets/friedfish.jpg';
import fritters from '../assets/fritters.jpg';
import gangdang from '../assets/gangdang.jpg';
import padkeemao from '../assets/padkeemao.jpg';
import soupdumplings from '../assets/soupdumplings.jpg';
import tomkha from '../assets/tomkha.jpg';
import wings from '../assets/wings.jpg';
import mango from '../assets/mangorice.jpg';
import icecream from '../assets/icecream.jpg';

const GalleryPage = () => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-8 mx-4 md:mx-12 max-w-screen-xl'>
			<ImageGridItem image={friedrice} />
			<ImageGridItem image={padthai} />
			<ImageGridItem image={tomyum} />
			<ImageGridItem image={friedfish} />
			<ImageGridItem image={fritters} />
			<ImageGridItem image={gangdang} />
			<ImageGridItem image={padkeemao} />
			<ImageGridItem image={soupdumplings} />
			<ImageGridItem image={tomkha} />
			<ImageGridItem image={wings} />
			<ImageGridItem image={mango} />
			<ImageGridItem image={icecream} />
		</div>
	);
};

export default GalleryPage;
