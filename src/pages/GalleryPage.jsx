import ImageGridItem from '../molecules/ImageGridItem';
import friedrice from '../branding/friedrice.jpg';
import padthai from '../branding/padthai.jpg';
import tomyum from '../branding/tomyum.jpg';
import friedfish from '../branding/friedfish.jpg';
import fritters from '../branding/fritters.jpg';
import gangdang from '../branding/gangdang.jpg';
import padkeemao from '../branding/padkeemao.jpg';
import soupdumplings from '../branding/soupdumplings.jpg';
import tomkha from '../branding/tomkha.jpg';
import wings from '../branding/wings.jpg';
import mango from '../branding/mangorice.jpg';
import icecream from '../branding/icecream.jpg';

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
