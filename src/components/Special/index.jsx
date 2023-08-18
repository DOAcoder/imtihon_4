import React, { useState } from "react";
import gul from "../../Assets/images/gul.png";
import icon1 from "../../Assets/Icons/Icon3.svg";
import icon2 from "../../Assets/Icons/Icon.svg";
import icon3 from "../../Assets/Icons/Icon1.svg";
import plus from "../../Assets/Icons/plus.svg";
import minus from "../../Assets/Icons/minus.svg";
import Cart from "../../Assets/Icons/cart.svg";
import data from "../../db";

import { NavLink, useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import "./style.scss";

const { NewFlowers, Relevant, Products } = data;

const index = () => {
  const [count, setCount] = useState(0);

  const { id } = useParams();
  let array = [...NewFlowers, ...Relevant, ...Products];
  const plant = array.filter((item) => item.id == id);

  return (
    <section className="mb-[150px]">
      <div className="container">
        <div className="wrapper">
          <Breadcrumb
            className="mb-[22px]"
            items={[
              {
                title: (
                  <NavLink className="link1 text-[12px] leading-[16px]" to="/">
                    Home
                  </NavLink>
                ),
              },
              {
                title: (
                  <NavLink
                    className="link1 text-[12px] leading-[16px]"
                    to="/flowers"
                  >
                    Flowers
                  </NavLink>
                ),
              },

              {
                title: "RedTulips",
              },
            ]}
          />

          <div className="flex items-center gap-[72px]">
            <div className="left">
              {plant?.map((el) => (
                <img
                  key={el.id}
                  className="w-[568px] h-[568px] mb-[20px] object-cover"
                  src={el.image}
                  alt="gul"
                />
              ))}

              <div className="flex items-center gap-[40px]">
                <div className="flex items-center gap-[10px]">
                  <img src={icon3} alt="icon3" />
                  <p className="w-[86px] text-[12px] leading-[16px]">
                    Benefits description
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={icon2} alt="icon3" />
                  <p className="w-[86px] text-[12px] leading-[16px]">
                    Always fresh flowers
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={icon1} alt="icon3" />
                  <p className="w-[86px] text-[12px] leading-[16px]">
                    Take photo of bouquet
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              {plant.map((el) => (
                <div key={el.id}>
                  <h2 className="text-[24px] font-medium leading-[28px] mb-[20px]">
                    {el.title}
                  </h2>
                  <div className="line flex items-center gap-[20px] mb-[60px]">
                    <p className="text-[28px] font-medium leading-[28px] ">
                      {el.price}
                    </p>
                    {el.disc && (
                      <p className="text-[18px] font-medium leading-[22px] line-through text-[#82828B]">
                        {el.disc}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <p className="text-[16px] leading-[24px] mb-[28px]">Count:</p>
              <div className="flex items-center gap-3 mb-[42px]">
                <img
                  src={plus}
                  onClick={() => setCount((count) => count + 1)}
                  alt=""
                />
                <p className=" w-[48px] text-center">{count}</p>

                <img
                  src={minus}
                  onClick={() => setCount((count) => count - 1)}
                  alt=""
                />
              </div>
              <div className="mb-[54px]">
                <p className="text-[16px] leading-[24px] mb-[20px]">Color:</p>
                <div className="flex items-center gap-5">
                  <div className="border-2 border-transparent hover:border-blue-500 active:border-[#2f0d0db9] w-[30px] h-[30px] flex items-center justify-center rounded-full">
                    <div className=" rounded-full w-[20px] h-[20px]  bg-[#d9d9df]"></div>
                  </div>

                  <div className="border-2 border-transparent hover:border-blue-500 active:border-[#2f0d0db9] w-[30px] h-[30px] flex items-center justify-center rounded-full">
                    <div className=" rounded-full w-[20px] h-[20px]  bg-[#EE7764]"></div>
                  </div>

                  <div className="border-2 border-transparent hover:border-blue-500 active:border-[#2f0d0db9] w-[30px] h-[30px] flex items-center justify-center rounded-full">
                    <div className=" rounded-full w-[20px] h-[20px]  bg-[#FFBC2C]"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-[40px]">
                <button className=" bg-blue-700 text-white w-[309px] h-[56px] rounded-lg text-[14px] font-medium leading-[17px] hover:bg-green-500 focus:bg-red-500">
                  Button
                </button>
                <div className="p-[16px] border-2 rounded-lg">
                  <img src={Cart} alt="Cart" />
                </div>
              </div>

              <div
                className=" w-[550px] accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Bouquet contents
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Details
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      t
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Delivery & Pay policy
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code>{" "}
                      className.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
