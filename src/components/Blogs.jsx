import { blogs } from "../constants";
import Blog from "./Blog";

function Blogs() {
  return (
    <div className="blogs w-full bg-white p-5 md:p-6 md:pr-0 rounded-md md:drop-shadow-md">
      <p className="text-main_grey font-semibold mb-6 text-lg">Blog</p>
      {blogs.map((blog, index) => {
        return (
          <Blog
            name={blog.name}
            img={blog.img}
            text_1={blog.text_1}
            text_2={blog.text_2}
            key={index}
          />
        );
      })}

      <p className="mt-10">
        <a href="#" className="text-cont_blue text-sm md:text-base">
          dev.to
        </a>
      </p>
    </div>
  );
}

export default Blogs;
