function Hobbie({ img, name, content }) {
  return (
    <div className="hobbie w-full mb-8">
      <div className="img-cont w-full mb-5 ">
        <img src={img} alt={name} className="rounded-md w-full" />
      </div>
      <h3 className="text-main_grey text-sm mb-2 font-semibold md:text-base">
        {name}
      </h3>
      <p className="text-sec_grey text-xs md:text-sm    ">{content}</p>
    </div>
  );
}

export default Hobbie;
