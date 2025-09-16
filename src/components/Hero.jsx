import React, { useState } from "react";
import assets from "../assets/assets";

const Hero = () => {
  const [activeButton, setActiveButton] = useState(null);

  const activeDuration = 300;

  const handleClick = (button) => {
    setActiveButton(button);

    setTimeout(() => {
      setActiveButton(null);
    }, activeDuration);
  };

  return (
    <section className="relative w-full overflow-hidden" id="home">
      <div className="relative max-w-screen-xl mx-auto md:px-4 md:py-24 max-md:py-6 max-lg:mx-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="w-full md:max-w-[1027px] relative">
            <h1 className="max-md:text-[58px] md:text-5xl lg:text-7xl 2xl:text-[90px] font-archivo font-semibold text-[#303030] leading-[1.1]">
              The yield-backed <br /> stablecoin protocol <br /> boosting{" "}
              <span className="relative inline-block">
                DeFi
                <img
                  src={assets.bgLogo}
                  alt="Hero"
                  className="md:hidden float-right w-14 h-14 ml-2 mb-1 object-contain"
                />
              </span>{" "}
              liquidity
            </h1>

            <p className="mt-4 max-md:text-xl lg:text-xl 2xl:text-2xl text-[#2626268C] font-gilroy-semibold font-normal">
              Keep your yield working for you — we keep your liquidity
              accessible
            </p>

            <div className="mt-8 lg:mt-20 flex space-x-5">
              <button
                onClick={() => handleClick("whitelist")}
                className={`md:w-80 px-6 py-4 rounded-full cursor-pointer duration-300 font-medium text-[#F7F7F7] hover:text-[#D1D1D2] hover:brightness-105`}
                style={{
                  backgroundImage: `url(${
                    activeButton === "whitelist"
                      ? assets.noizeBlackClick
                      : assets.noizeBlack
                  })`,
                  color: activeButton === "whitelist" ? "#595959" : "#F7F7F7",
                  transition: "background-image 0.3s ease, color 0.3s ease",
                }}
              >
                Join Whitelist
              </button>
              <button
                onClick={() => handleClick("docs")}
                className={`md:w-52 px-6 py-4 rounded-full cursor-pointer duration-300 font-medium text-[#2E2E2E] hover:text-[#2E2E2E]/75 hover:brightness-103`}
                style={{
                  backgroundImage: `url(${
                    activeButton === "docs"
                      ? assets.noizeWhiteClick
                      : assets.noizeWhite
                  })`,
                  transition: "background-image 0.3s ease, color 0.3s ease",
                }}
              >
                Read Docs
              </button>
            </div>

            <div className="clear-both" />
          </div>

          <div className="hidden md:flex flex-shrink-0">
            <img
              src={assets.bgLogo}
              alt="Hero"
              className="md:w-[152px] md:h-[152px] lg:w-[212px] lg:h-[212px] 2xl:w-72 2xl:h-72 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
