const ImageGridItem = (props) => {
	return (
		<div className="max-h-96 overflow-hidden">
			<img src={props.image} className="md:h-auto h-full w-full" />
		</div>
	);
};

export default ImageGridItem;
