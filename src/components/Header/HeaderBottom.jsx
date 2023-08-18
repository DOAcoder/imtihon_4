import { NavLink } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div>
      <nav className=" h-[80px] flex items-center justify-center">
        <ul className="flex items-center gap-[67px] text-[16px]  leading-[24px] text-black">
          <li>
            <NavLink
              className="p-2 border border-transparent hover:border-gray-600 rounded-lg hover:bg-slate-400"
              to="/"
            >
             Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2 border border-transparent hover:border-gray-600 rounded-lg hover:bg-slate-400"
              to="/flowers"
            >
              Flowers
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2 border border-transparent hover:border-gray-600 rounded-lg hover:bg-slate-400"
              to="/plants"
            >
              Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2 border border-transparent hover:border-gray-600 rounded-lg hover:bg-slate-400"
              to="/gift"
            >
              Gifts
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2 border border-transparent hover:border-gray-600 rounded-lg hover:bg-slate-400"
              to="discount"
            >
              Discounts
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2 border border-transparent hover:border-gray-600 rounded-lg hover:bg-slate-400"
              to="aboutus"
            >
              About us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBottom;
