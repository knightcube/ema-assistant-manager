import emaLogo from "../../public/images/ema_logo.png";
import MyButton from "../ui/MyButton";
import Tile from "../ui/Tile";

const Home = () => {
  return (
    <div className="flex flex-col justify-evenly lg:flex-row mx-auto gap-8 lg:gap-52 lg:px-48">
      <div className="flex flex-col items-center lg:items-start lg:h-svh pt-10 ">
        <img src={emaLogo} alt="EMA Logo" />
        <h1 className="text-2xl lg:text-4xl text-center lg:text-left font-bold mt-4">
          AI Events Manager Assistant
        </h1>
        <h1 className="text-xl lg:text-2xl text-center lg:text-left text-gray-500 mt-5">
          Events Faster Better Safer...
        </h1>
        <MyButton title="Book a free 1-to-1 call" url="https://calendar.app.google/1rvohjmHTUym8RBJ8"/>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 lg:p-10 mt-4 lg:mt-0">
        <Tile
          title="Ask Me Anything"
          subtitle="For Event Queries Just Ask here"
        />
        <Tile title="Voice Note" subtitle="Never write a debrief email again" />
        <Tile
          title="Your Module"
          subtitle="Create your own module based on your needs"
        />
        <Tile
          title="Get Feedback"
          subtitle="Adaptive AI Survey, Real Time Analysis"
        />
      </div>
    </div>
  );
};

export default Home;
