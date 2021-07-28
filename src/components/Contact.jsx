const Contact = () => {
  return (
    <div id="contact" className=" w-9/12 mx-auto bg-custom-gray-1 py-24">
      <div className="  overflow-hidden">
        <span className="uppercase text-sm text-custom-ivory font-bold">
          First Name:
        </span>
        <input
          className="w-full bg-custom-ivory text-black mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter First Name"
        />
      </div>
      <div className="w-full overflow-hidden mt-4">
        <span className="uppercase text-sm text-custom-ivory font-bold">
          Last Name:
        </span>
        <input
          className="w-full bg-custom-ivory text-black mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter Last Name"
        />
      </div>

      <div className="mt-4">
        <span className="uppercase text-sm text-custom-ivory font-bold">
          Email:
        </span>
        <input
          className="w-full bg-custom-ivory text-black mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter email"
        />
      </div>

      <div className="mt-4">
        <span className="uppercase text-sm text-custom-ivory font-bold">
          Message:
        </span>
        <textarea
          className="w-full  h-32 bg-custom-ivory text-black mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline"
          type="text"
        ></textarea>
      </div>

      <div className="mt-8 text-center">
        <button className="lg:w-4/12 uppercase text-sm font-bold tracking-wide bg-custom-black-1 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
