import Arrow from "../../Assets/Icons/rightArrow.svg"
import Arrow2 from "../../Assets/Icons/arrow2.svg"
import { Carousel } from "antd";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";
import "./style.scss";


const index = () => {
  return (
    <section className="mb-[40px]">
      <div className="container">
        <div className="wrapper">
          <Breadcrumb
            className="mb-[40px]"
            items={[
              {
                title: (
                  <NavLink className="link1 text-[12px] leading-[16px]" to="/">
                    Home
                  </NavLink>
                ),
              },

              {
                title: "Flowers",
              },
            ]}
          />
          <div className="top_side mb-[40px] rounded-lg overflow-hidden">
            <Carousel autoplay>
              <div className="corusel w-full h-[250px] py-[43px] px-[81px]">
                <h1 className=" title text-[28px] font-medium leading-[28px] mb-[10px]">
                  40% OFF
                </h1>
                <p className="text-[18px] font-medium leading-[22px] mb-[24px]">
                  Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className="btn flex items-center gap-[12px] py-[13px] px-[18px] bg-black text-white text-[14px] font-mideum leading-[17px] rounded-lg">
                  Shop now <img src={Arrow} alt="Arrow" />
                </button>
              </div>
              <div className="corusel w-full  h-[250px] py-[43px] px-[81px]">
                <h1 className=" title text-[28px] font-medium leading-[28px] mb-[10px]">
                  40% OFF
                </h1>
                <p className="text-[18px] font-medium leading-[22px] mb-[24px]">
                  Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className="btn flex items-center gap-[12px] py-[13px] px-[18px] bg-black text-white text-[14px] font-mideum leading-[17px] rounded-lg">
                  Shop now <img src={Arrow} alt="Arrow" />
                </button>
              </div>
              <div className="corusel w-full  h-[250px] py-[43px] px-[81px]">
                <h1 className=" title text-[28px] font-medium leading-[28px] mb-[10px]">
                  40% OFF
                </h1>
                <p className="text-[18px] font-medium leading-[22px] mb-[24px]">
                  Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className="btn flex items-center gap-[12px] py-[13px] px-[18px] bg-black text-white text-[14px] font-mideum leading-[17px] rounded-lg">
                  Shop now <img src={Arrow} alt="Arrow" />
                </button>
              </div>
              <div className="corusel w-full  h-[250px] py-[43px] px-[81px]">
                <h1 className=" title text-[28px] font-medium leading-[28px] mb-[10px]">
                  40% OFF
                </h1>
                <p className="text-[18px] font-medium leading-[22px] mb-[24px]">
                  Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className="btn flex items-center gap-[12px] py-[13px] px-[18px] bg-black text-white text-[14px] font-mideum leading-[17px] rounded-lg">
                  Shop now <img src={Arrow} alt="Arrow" />
                </button>
              </div>
            </Carousel>
          </div>

          <div className="bottom_side flex items-center justify-between">
            <div className="left_side w-[48%] h-[220px] pt-[40px] pb-[67px] px-[80px] rounded-lg">
              <h2 className="title text-[28px] font-medium leading-[28px]">
                Nice little gifts
              </h2>
              <p className="text-[18px] font-medium leading-[22px] mb-[24px]">
                for loved ones
              </p>
              <button className="flex items-center gap-[12px] py-[13px] px-[18px]  text-black text-[14px] font-mideum leading-[17px] rounded-lg border-2 border-transparent  hover:border-black focus:bg-cyan-400">
                View now <img src={Arrow2} alt="Arrow" />
              </button>
            </div>
            <div className="right_side w-[48%] h-[220px] pt-[40px] pb-[67px] px-[80px] rounded-lg">
              <h2 className="title text-[28px] font-medium leading-[28px]">
                Plants
              </h2>
              <p className="text-[18px] font-medium leading-[22px] mb-[24px]">
                for home comfort
              </p>
              <button className="flex items-center gap-[12px] py-[13px] px-[18px]  text-black text-[14px] font-mideum leading-[17px] rounded-lg border-2 border-transparent  hover:border-black focus:bg-cyan-400">
                View now <img src={Arrow2} alt="Arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;