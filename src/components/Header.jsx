const Header = () => {
  return (
    <>
      <header
        id="home"
        className="bg-hero-image bg-auto bg-no-repeat bg-cover min-h-screen w-full h-full flex justify-end content-end text-right "
      >
        <div className="mt-auto mb-6 mr-16">
          <h1 className="text-5xl lg:text-7xl text-custom-ivory my-6">A</h1>
          <h1 className="text-5xl lg:text-7xl text-white  my-6 stroke font-bold ">
            Web Development
          </h1>
          <h1 className="text-5xl lg:text-7xl text-custom-ivory my-6">
            Agency
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
