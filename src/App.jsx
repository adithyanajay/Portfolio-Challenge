import Blogs from "./components/Blogs";
import Experiences from "./components/Experiences";
import Hobbies from "./components/Hobbies";
import Profile from "./components/Profile";
import ProjectNav from "./components/ProjectNav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="md:bg-white_bg w-full min-h-screen pt-5 md:pt-12">
      <div className="wrapper w-5/6 max-w-xs md:w-11/12 md:max-w-6xl m-auto flex flex-col gap-8">
        <Profile />

        <div className="container flex flex-col md:flex-row md:gap-8 md:min-w-full ">
          <section className="section-1 w-full md:w-1/2 lg:w-1/3 flex flex-col gap-7">
            <Skills />
            <Hobbies />
          </section>
          <section className="section-2 w-full md:w-1/2 lg:w-2/3 flex flex-col gap-7">
            <Blogs />
            <Experiences />
          </section>
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
