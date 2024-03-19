import MetadataHeader from "../components/ui/MetadataHeader";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="overflow-hidden bg-gray-950">
      <MetadataHeader
        title="Sorakhmer | Error 404"
        description="Welcome to Sorakhmer"
      />
      <div className="flex items-center justify-center min-h-screen bg-fixed bg-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-red-600 text-center -mt-52">
              <div className="relative ">
                <h1 className="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold animate-bounce">
                  <span>4</span>
                  <span>0</span>
                  <span>4</span>
                </h1>
                <span className="absolute  top-0   -ml-12  text-primary font-semibold">
                  Oops!
                </span>
              </div>
              <h5 className="text-primary font-semibold -mr-10 -mt-3">
                Page not found
              </h5>
              <p className="text-primary mt-2 mb-12">
                We are sorry, but the page you requested was not found
              </p>
              <Link
                to="/"
                className="border border-primary px-5 py-3 text-sm shadow-lg font-medium tracking-wider text-primary hover:text-white hover:bg-primary rounded-full hover:shadow-xl btn btn-sm "
              >
                Go to Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
