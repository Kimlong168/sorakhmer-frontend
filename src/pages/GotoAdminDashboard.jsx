import { Link } from "react-router-dom";
import logo from "../assets/images/sorakhmer-logo.png";
const GotoAdminDashboard = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-5 dark:bg-gray-950">
      <div className="w-[150px] -mt-[100px]">
        <img src={logo} alt="logo" />
      </div>
      <h1 className="dark:text-white text-2xl font-bold uppercase mb-5 text-center">
        Sorakhmer Admin Dashboard
      </h1>
      <Link
        to="https://sorakhmer-admin.netlify.app/"
        className="px-3 py-2 bg-primary text-white text-center rounded text-xl hover:bg-transparent hover:text-primary transition duration-300 ease-in-out border-2 border-primary hover:shadow-lg"
      >
        Go to Admin Dashboard
      </Link>

      <div className="w-full flex justify-center items-center gap-3 text-xl dark:text-white px-8">
        <span className="w-full h-[0.5px] inline-block bg-primary"></span>or{" "}
        <span className="w-full h-[0.5px] inline-block bg-primary"></span>
      </div>

      <Link
        to="/"
        className="px-3 py-2 bg-primary text-white text-center rounded text-xl hover:bg-transparent hover:text-primary transition duration-300 ease-in-out border-2 border-primary hover:shadow-lg"
      >
        Back to Home Page
      </Link>
    </div>
  );
};

export default GotoAdminDashboard;
