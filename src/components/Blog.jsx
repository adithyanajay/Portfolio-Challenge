function Blog({ name, img, text_1, text_2 }) {
  return (
    <div className="blog w-full">
      <div className="container flex flex-col mb-5 md:flex-row gap-5 ">
        <h1 className="text-main_grey w-full mb-3 md:w-1/3 text-lg md:text-2xl font-semibold">
          {name}
        </h1>
        <div className="img-cont w-full md:w-2/3">
          <img src={img} alt={name} className="w-full" />
        </div>
      </div>

      <div className="content md:pr-14">
        <p className="text-sec_grey mt-8 text-sm lg:text-base">{text_1}</p>
        <p className="text-sec_grey mt-5 text-sm lg:text-base">{text_2}</p>
      </div>
    </div>
  );
}
export default Blog;
