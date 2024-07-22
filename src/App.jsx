import Header from "../src/Components/Header";
import LocomotiveScroll from "locomotive-scroll";
import Loader from "./Components/Loader";
import Home from "./Pages/Home/Home";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="fixed left-0 top-0 h-full w-full -z-[999999]">
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:45px_45px]"></div>
        </div>
      </div>
      <Header />
      <Home />
    </>
  );
};

export default App;
