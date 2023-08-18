import "./style.scss";
const index = () => {
  return (
    <footer className="bg-[#F9F9FB]">
      <div className="container">
        <div className="wrapper pt-[58px] pb-[33px]">
          <ul className="list flex item-center justify-between mb-[63px]">
            <li className="flex flex-col gap-y-[18px]">
              <h2 className="text-[16px] leading-[24px] ">Title</h2>
              <a
                className="text-[12px] font-medium leading-[18px]  border-b border-transparent hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="tel:+998991234567"
              >
                +998991234567
              </a>
              <div className="flex items-center gap-[20px]">
                <a href="#">
                  <i className="bx bxl-instagram text-[24px]"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-whatsapp text-[24px]"></i>
                </a>
                <a href="#">
                  {" "}
                  <i className="bx bxl-facebook text-[24px]"></i>
                </a>
              </div>
            </li>
            <li className="flex flex-col gap-y-[12px] ">
              <h3 className="text-[16px]  leading-[24px]"> Help</h3>

              <a
                className="text-[14px] font-medium leading-[17px]  border-b border-transparent hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                Contact us
              </a>
              <a
                className="text-[14px] font-medium leading-[17px] border-b border-transparent hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                Delivery information
              </a>
              <a
                className="text-[14px] font-medium leading-[17px]  border-b border-transparent hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                Payment information
              </a>
              <a
                className="text-[14px] font-medium leading-[17px]  border-b border-transparent hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                Customer service
              </a>
              <a
                className="text-[14px] font-medium leading-[17px]  border-b border-transparent hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                FAQ
              </a>
            </li>
            <li className="flex flex-col gap-y-[12px] ">
              <h3 className="text-[16px]  leading-[24px]">About us</h3>

              <a
                className="text-[14px] font-medium leading-[17px]  border-b border-transparent hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                Our Stores
              </a>
              <a
                className="text-[14px] font-medium leading-[17px] border-b border-transparent  hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                Flower care
              </a>
              <a
                className="text-[14px] font-medium leading-[17px] border-b border-transparent  hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                Site map
              </a>
            </li>
            <li className="flex flex-col gap-y-[12px] ">
              <h3 className="text-[16px]  leading-[24px]">Legal</h3>

              <a
                className="text-[14px] font-medium leading-[17px]  border-b border-transparent hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                Privacy policy
              </a>
              <a
                className="text-[14px] font-medium leading-[17px] border-b border-transparent  hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                Terms & Conditions
              </a>
              <a
                className="text-[14px] font-medium leading-[17px]  border-b border-transparent hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                Cookie policy
              </a>
              <a
                className="text-[14px] font-medium leading-[17px] border-b border-transparent  hover:border-b-blue-500 hover:text-[#595CFF] duration-300 "
                href="#"
              >
                Item 4
              </a>
              <a
                className="text-[14px] font-medium leading-[17px] border-b border-transparent  hover:border-b-blue-500 hover:text-[#595CFF]  duration-300 "
                href="#"
              >
                Item 5
              </a>
            </li>
          </ul>
          <p className=" desc text-[12px] leading-[16px]">© Copyright, 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default index;
