
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import "./style.scss";
const index = () => {
    return (
        <header className=" fixed w-full  z-20 top-0 backdrop-blur-lg">
          <div className="container">
            <HeaderTop/>
            <HeaderBottom/>
          </div>
        </header>
    );
};

export default index;