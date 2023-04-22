import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import Banner from "./components/Banner";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RightSide from "./components/RightSide";

function App() {
  return (
    <>
      <main className="w-full font-body font-[300] bg-bodyColor text-textLight ">
        <Navbar />

        <div className="w-full h-auto lg:flex items-center gap-20 justify-between">
          {/* RIGHT SIDE */}
          <div className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0">
            <LeftSide />
          </div>
          {/* MIDDLE CONTENT */}
          <div className="h-auto w-full lg:m-32  mx-auto p-4">
            <Banner />
            <About />
            <Project />
            <Contact />
            <Footer />
          </div>
          {/* LEFT SIDE */}
          <div className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0">
            <RightSide />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
