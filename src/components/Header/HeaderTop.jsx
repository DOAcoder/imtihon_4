import Logo from "../../Assets/Icons/logo.svg";
import Search from "../../Assets/Icons/lupa.svg";
import Cart from "../../Assets/Icons/cart.svg";

const HeaderTop = () => {
  return (
    <div>
      <div className="h-[60px] flex items-center justify-between">
        <a className="flex items-center gap-[7px]" href="#">
          <img src={Logo} alt="Logo" />
          <p className="text-[14px] font-medium leading-[17px] text-black">Tashkent</p>
        </a>

        <div className=" flex items-center gap-[22px]">
          <a href="#">
            <img src={Search} alt="Search" />
          </a>
          <a href="#">
            <img src={Cart} alt="Cart" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;