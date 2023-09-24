import { mail, person, telephone } from "../assets";
function Profile() {
  return (
    <div className="md:drop-shadow-md profile flex flex-col items-center justify-center bg-white w-full m-auto rounded-md  p-3 sm:p-5 max-w-xs  gap-3 md:flex-row md:max-w-6xl md:w-full md:items-start md:gap-8 ">
      <div className="profile_img md:w-4/6 max-w-xs mb-3 md:mb-0">
        <img src={person} alt="person" className="w-full rounded-md" />
      </div>
      <div className="profile_info w-full flex flex-col gap-5 md:gap-5">
        <div className="profile_detail flex flex-col gap-5 md:flex-row">
          <div className="name w-full text-left">
            <h1 className="text-2xl text-main_grey font-semibold">
              Billy Pearson
            </h1>
            <p className="text-sm text-sec_grey font-medium">
              Front-end Developer
            </p>
          </div>
          <div className="contact">
            <div className="section w-full flex gap-4 mb-2">
              <div className="img-cont w-5">
                <img src={mail} alt="mail" className="w-auto" />
              </div>

              <p className="text-main_grey text-sm cursor-pointer">
                billy@example.com
              </p>
            </div>
            <div className="section w-full flex gap-4 ">
              <div className="img-cont w-5">
                <img src={telephone} alt="telephone" className="w-auto" />
              </div>

              <p className="text-main_grey text-sm cursor-pointer">
                +91-49392-493
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-w-xl">
          <div className="profile_content text-sec_grey text-sm ">
            Self-motivated developer, who is willing to learn and create
            outstanding UI applications.
          </div>
          <div className="profile_content text-sec_grey text-sm hidden md:block ">
            {" "}
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
