import Arrow from "../../Assets/Icons/rightArrow.svg";
import Arrow2 from "../../Assets/Icons/arrow2.svg";
import { Carousel } from "antd";
import "./style.scss";


const index = () => {
  return (
    <section>
      <div className="container">
        <div className="wrapper rounded-lg overflow-hidden mb-[40px]">
          <Carousel autoplay>
            <div className="slider w-full h-[482px] pt-[216px] pb-[96px] pl-[100px]">
              <h2 className="text-[32px] font-medium leading-[38px] mb-[20px]">Title</h2>
              <p className="text-[18px] font-medium leading-[22px] mb-[40px]">Discription</p>
              <button className="flex items-center gap-[12px] text-[14px] font-medium leading-[17px] text-white bg-blue-500 py-[17px] px-[29px] rounded-lg hover:bg-green-500 focus:bg-red-500 ">Button <img src={Arrow} alt="Arrow" /></button>
            </div>
            <div className="slider w-full h-[482px] pt-[216px] pb-[96px] pl-[100px]">
              <h2 className="text-[32px] font-medium leading-[38px] mb-[20px]">Title</h2>
              <p className="text-[18px] font-medium leading-[22px] mb-[40px]">Discription</p>
              <button className="flex items-center gap-[12px] text-[14px] font-medium leading-[17px] text-white bg-blue-500 py-[17px] px-[29px] rounded-lg hover:bg-green-500 focus:bg-red-500 ">Button <img src={Arrow} alt="Arrow" /></button>
            </div>
            <div className="slider w-full h-[482px] pt-[216px] pb-[96px] pl-[100px]">
              <h2 className="text-[32px] font-medium leading-[38px] mb-[20px]">Title</h2>
              <p className="text-[18px] font-medium leading-[22px] mb-[40px]">Discription</p>
              <button className="flex items-center gap-[12px] text-[14px] font-medium leading-[17px] text-white bg-blue-500 py-[17px] px-[29px] rounded-lg hover:bg-green-500 focus:bg-red-500 ">Button <img src={Arrow} alt="Arrow" /></button>
            </div>
            <div className="slider w-full h-[482px] pt-[216px] pb-[96px] pl-[100px]">
              <h2 className="text-[32px] font-medium leading-[38px] mb-[20px]">Title</h2>
              <p className="text-[18px] font-medium leading-[22px] mb-[40px]">Discription</p>
              <button className="flex items-center gap-[12px] text-[14px] font-medium leading-[17px] text-white bg-blue-500 py-[17px] px-[29px] rounded-lg hover:bg-green-500 focus:bg-red-500 ">Button <img src={Arrow} alt="Arrow" /></button>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default index;
