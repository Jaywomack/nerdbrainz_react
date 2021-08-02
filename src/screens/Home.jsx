import Contact from "../components/Contact";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import site_1 from "../images/site_1.jpeg";
import site_2 from "../images/site_2.jpeg";
import site_3 from "../images/site_3.jpeg";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-custom-color-1">
        <section id="portfolio" className="section-title ">
          <h1 className="text-5xl md:text-6xl lg:text-8xl text-custom-ivory text-start ml-12 py-12 lg:py-24 ">
            Portfolio
          </h1>
          <div className="flex-row flex-wrap w-100">
            <div className=" w-100 ">
              <img
                className="project-img w-full px-16 "
                width="auto"
                height="auto"
                src={site_1}
                alt=""
              />
            </div>
            <div className="section-title py-12 lg:py-24">
              <h1 className="text-4xl md:text-6xl lg:text-8xl text-custom-ivory text-center lg:text-right mr-12 mb-4 lg:mb-8">
                Cutting
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-8xl text-custom-ivory text-center lg:text-right mr-12 stroke">
                Edge Designs
              </h1>
            </div>
            <div className=" w-100">
              <img
                className="project-img w-full px-16"
                width="auto"
                height="auto"
                src={site_2}
                alt=""
              />
            </div>
            <div className="section-title py-12 lg:py-24">
              <h1 className="text-4xl md:text-6xl lg:text-8xl text-custom-ivory text-start ml-12 ">
                State Of The Art
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-8xl text-custom-ivory text-start ml-12  ">
                E-Commerce
              </h1>
            </div>
            <div className=" w-100">
              <img
                className="project-img w-full px-16"
                width="auto"
                height="auto"
                src={site_3}
                alt=""
              />
            </div>
          </div>
        </section>
        {/* Start Technologies Section */}
        <section
          id="technologies"
          className="flex flex-wrap overflow-hidden ml-12 my-24"
        >
          <div className="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="text-custom-ivory text-4xl md:text-5xl lg:text-8xl fw-bold transition duration-300 ease-in-out transform hover:translate-x-5">
              BLOGS
            </h2>
            <h2 className="text-custom-ivory  fw-bold   text-4xl md:text-5xl lg:text-8xl fw-bold transition duration-300 ease-in-out transform hover:translate-x-5">
              SHOPIFY
            </h2>
            <h2 className=" text-custom-ivory   fw-bold   text-4xl md:text-5xl lg:text-8xl fw-bold transition duration-300 ease-in-out transform hover:translate-x-5">
              E-COMMERCE
            </h2>
            <h2 className=" text-custom-ivory   fw-bold   text-4xl md:text-5xl lg:text-8xl fw-bold transition duration-300 ease-in-out transform hover:translate-x-5">
              SEO
            </h2>
            <h2 className=" text-custom-ivory   fw-bold   text-4xl md:text-5xl lg:text-8xl fw-bold transition duration-300 ease-in-out transform hover:translate-x-5">
              GRAPHIC DESIGN
            </h2>
            <h2 className="  fw-bold   text-4xl md:text-5xl lg:text-8xl fw-bold transition duration-300 ease-in-out transform hover:translate-x-5">
              REACT
            </h2>
            <h2 className=" text-custom-ivory   fw-bold   text-4xl md:text-5xl lg:text-8xl fw-bold transition duration-300 ease-in-out transform hover:translate-x-5">
              BOOTSTRAP
            </h2>
            <h2 className="  text-custom-ivory  fw-bold  text-4xl md:text-5xl lg:text-8xl fw-bold transition duration-300 ease-in-out transform hover:translate-x-5">
              HTML
            </h2>
            <h2 className="text-custom-ivory text-4xl lg:text-8xl fw-bold   text-4xl lg:text-8xl fw-bold transition duration-300 ease-in-out transform hover:translate-x-5">
              CSS
            </h2>
            <h2 className="text-custom-ivory text-4xl lg:text-8xl fw-bold text-4xl lg:text-8xl fw-bold transition duration-300 ease-in-out transform hover:translate-x-5">
              JAVASCRIPT
            </h2>
          </div>
          <div className="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 custom-black-text text-4xl md:text-5xl lg:text-8xl fw-bold lg:my-auto mb-8  lg:text-center">
            TECHNOLOGIES
          </div>
        </section>
        {/* End Technologies Section */}
        {/* Start Testimonials Section */}
        <Pricing />
        {/* End Testimonials Section */}

        {/* Start Testimonials Section */}
        <Testimonials />
        {/* End Testimonials Section */}
      </main>
      <Contact />
    </div>
  );
};

export default Home;
