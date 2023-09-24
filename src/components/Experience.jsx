function Experience({ img, period, position, content }) {
  return (
    <div className="experience flex gap-8 md:items-center">
      <div className="img-cont w-5/12 md:w-2/12">
        <img src={img} alt={position} className="w-auto" />
      </div>
      <div className="content w-11/12 ">
        <p className="date text-sec_grey text-xs lg:text-sm mb-2">{period}</p>
        <h3 className="position text-main_grey font-bold text-xs lg:text-sm mb-4">
          {position}
        </h3>
        <p className="content text-xs lg:text-sm text-sec_grey md:mr-20">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Experience;
