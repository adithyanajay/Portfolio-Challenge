import { hobbies } from "../constants";
import Hobbie from "./Hobbie";

function Hobbies() {
  return (
    <div className="hobbies w-full bg-white p-5 rounded-md md:drop-shadow-md">
      <h1 className="text-main_grey text-xl font-semibold mb-5">Hobbies</h1>
      {hobbies.map((hobbie, index) => {
        return (
          <Hobbie
            img={hobbie.img}
            name={hobbie.name}
            content={hobbie.content}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Hobbies;
