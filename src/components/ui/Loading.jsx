import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const Loading = () => {
  const { language } = useContext(DataContext);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-8 h-8 border-4 border-gray-800 dark:border-primary rounded-full animate-spin"
      ></div>
      {language == "en" ? (
        <p className="ml-2">Loading...</p>
      ) : (
        <p className="ml-2">កំពុងដំណើរការ...</p>
      )}
    </div>
  );
};

export default Loading;
