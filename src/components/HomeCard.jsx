const HomeCard = (props) => {
  return (
    <div className="w-10/12 h-auto space-y-2 max-w-xl">
      <img src={props.img} className="rounded" />
      <h1 className="text-center font-black">{props.title}</h1>
      <div className="flex justify-evenly items-center">
        <p className="text-center mr-4">{props.descript}</p>
        <p className="text-center mr-4 font-black">{props.price}</p>
      </div>
    </div>
  );
}

export default HomeCard;