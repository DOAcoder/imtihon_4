
import React, { useState } from "react";
import NewCard from "../UI/Cards/NewCard";
import data from "../../db";
import "./style.scss";

const index = () => {
  const { NewFlowers } = data;

  const [count, setCount] = useState(0);
  const wrapperStyle = {
    transform: `translateX(-${count * 310}px)`,
  };
  const nextCard = () => {
    setCount((nextCounter) =>
      nextCounter === NewFlowers.length - 1 ? 0 : nextCounter + 1
    );
    if (count == 4) {
      setCount(0);
      wrapper.classList.add(`translate-x-[2400px]`);
    }
  };

  const prevCard = () => {
    setCount((prevCounter) =>
      prevCounter === NewFlowers.length - 1 ? 0 : prevCounter - 1
    );
  };

  return (
    <section className="mb-[93px] ">
      <div className="container overflow-x-hidden">
        <div className="wrapper">
          <div className="flex items-center justify-between">
            <h1 className="text-[24px] font-medium leading-[28px] mb-[44px]">
              New
            </h1>
            <div className="flex gap-[92px]">
              <div>
                <div className="flex items-center gap-[19px]">
                  <svg
                    onClick={() => prevCard()}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.85981 8.11673C7.6729 7.96109 7.36985 7.96109 7.18293 8.11673L2.14019 12.3158L2.084 12.3719C1.95329 12.53 1.97541 12.7488 2.14834 12.8861L7.19108 16.8899L7.25866 16.9347C7.44823 17.0386 7.70562 17.0181 7.86777 16.8765L7.92156 16.8202C8.04631 16.6624 8.02172 16.448 7.85166 16.313L3.67891 13H22.5238L22.6094 12.9919C22.8315 12.9496 23 12.7455 23 12.5C23 12.2239 22.7868 12 22.5238 12H3.87229L7.85981 8.68037L7.91519 8.62517C8.04442 8.46984 8.02596 8.25508 7.85981 8.11673Z"
                      fill={count > 0 ? "black" : "#E6E6EB"}
                    />
                  </svg>

                  <svg
                    onClick={() => nextCard()}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.1402 8.11673C16.3271 7.96109 16.6302 7.96109 16.8171 8.11673L21.8598 12.3158L21.916 12.3719C22.0467 12.53 22.0246 12.7488 21.8517 12.8861L16.8089 16.8899L16.7413 16.9347C16.5518 17.0386 16.2944 17.0181 16.1322 16.8765L16.0784 16.8202C15.9537 16.6624 15.9783 16.448 16.1483 16.313L20.3211 13H1.97619L1.89059 12.9919C1.66845 12.9496 1.5 12.7455 1.5 12.5C1.5 12.2239 1.7132 12 1.97619 12H20.1277L16.1402 8.68037L16.0848 8.62517C15.9556 8.46984 15.974 8.25508 16.1402 8.11673Z"
                      fill="black"
                    />
                  </svg>
                  
                </div>
              </div>
              <span></span>
            </div>
          </div>

          <ul
            style={wrapperStyle}
            className="flex items-center justify-between gap-10 transform duration-500"
          >
            {NewFlowers.length &&
              NewFlowers.map((el, index) => {
                return <NewCard key={index} state={el} />;
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
