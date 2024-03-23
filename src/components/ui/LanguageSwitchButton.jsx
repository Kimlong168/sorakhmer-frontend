import { useContext } from "react";
import cambodiaFlag from "../../assets/images/cambodiaFlag.png";
import usFlag from "../../assets/images/us-flag.png";
import { DataContext } from "../../contexts/DataContext";

const LanguageSwitchButton = () => {
  const { language, setLanguage } = useContext(DataContext);

  return (
    <div
      onClick={() => {
        setLanguage((prev) => (prev === "en" ? "kh" : "en"));
        if (language == "en") {
          localStorage.setItem("language", "kh");
        } else {
          localStorage.setItem("language", "en");
        }
      }}
      className="flex items-center gap-2 text-sm"
    >
      <img
        className="min-w-[30px] w-[30px] cursor-pointer"
        src={language == "en" ? usFlag : cambodiaFlag}
        alt="flag"
      />
      <span className="xl:inline hidden">{language == "en" ? "EN" : "KH"}</span>
    </div>
  );
};

export default LanguageSwitchButton;
