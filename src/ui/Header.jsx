import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import JordanLogo from "../assets/icons/JordanLogo";
function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 w-[90%] mx-auto bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center justify-between w-full pt-4 mx-auto sm:h-16 lg:h-20 no-highlight-text">
        <div className="flex ">
          <Link to={"/"}>
            <JordanLogo />
          </Link>
        </div>

        <div className="items-center flex-shrink-0 space-x-8 lg:flex ">
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
