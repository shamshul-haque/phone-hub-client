import { FiPhoneCall } from "react-icons/fi";

const Support = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 py-10 text-center">
      <h1 className="text-3xl font-bold uppercase">
        WELCOME TO PHONO SUPPORT. {`WE'RE`} HERE TO HELP.
      </h1>
      <p>ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</p>
      <div className="bg-green-400 flex-1 flex justify-center gap-5 rounded-xl p-10 mt-5">
        <div className="space-y-3">
          <h3 className="text-xl md:text-2xl font-bold">HAVE ANY DOUBTS?</h3>
          <h1 className="text-2xl md:text-4xl font-bold">CALL US NOW</h1>
          <p className="text-xl md:text-2xl flex items-center gap-2">
            <FiPhoneCall />
            <span>+880 1406680846</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
