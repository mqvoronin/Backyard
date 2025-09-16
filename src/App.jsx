import assets from "./assets/assets";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import What from "./components/What";

const App = () => {
  return (
    <div className="relative min-h-screen  bg-[#F0F0F1] ">
      <div
        className="absolute  top-0 left-0 right-0 h-full bg-no-repeat bg-top bg-cover pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundImage: `url(${assets.bgNav})`,
        }}
      />
      <div className="relative z-10 ">
        <Navbar />
        <Hero />
        <What />
      </div>
    </div>
  );
};

export default App;
