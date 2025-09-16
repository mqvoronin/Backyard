import React from "react";
import assets from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./mySwiper.css";

const What = () => {
  const cards = [
    {
      id: 1,
      img: assets.startTree,
      title: "Yield Aggregator",
      subtitle: "One-click yield aggregation",
      text: "Choose multiple strategies, diversify in seconds, and optimize your yield without complexity.",
    },
    {
      id: 2,
      img: assets.mdTree,
      title: "Yield-backed Stablecoin",
      subtitle: "Unlock liquidity with BYD",
      text: "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time.",
    },
    {
      id: 3,
      img: assets.cointTree,
      title: "Boost DeFi Liquidity",
      subtitle: "Boost protocols, earn more",
      text: "Your liquidity empowers DeFi – vote for pools, earn bribes, and maximize your rewards.",
    },
  ];

  const Card = ({ id, img, title, subtitle, text }) => (
    <div className="flex flex-row items-center justify-between gap-6 max-md:flex-col max-md:items-center max-md:text-center   lg:flex-col lg:items-center lg:text-center duration-300 hover:scale-105 max-w-full ">
      <div className="flex-1 max-md:order-2 lg:order-2">
        <p className="relative font-gilroy-semibold mb-4 rounded-4xl bg-[#F4F6F7] md:text-xl py-3.5 px-4 max-lg:w-[360px] xl:w-[360px] text-[#303030] pl-16 pr-6 inline-block whitespace-nowrap">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 bg-[#2D322F] flex items-center justify-center text-[#FBFBFC] font-archivo">
            {id}
          </span>
          {title}
        </p>
        <p className="text-[#787878] max-2xl:text-sm text-left max-md:text-center rounded-4xl bg-[#F4F6F7] p-6 min-h-36 max-w-[360px]">
          <span className="block font-archivo md:text-lg 2xl:text-xl font-extrabold text-[#2D322F] whitespace-nowrap mb-2">
            {subtitle}
          </span>
          {text}
        </p>
      </div>

      <img
        src={img}
        alt={title}
        className="w-[245px] h-[245px] lg:w-[191px] lg:h-[191px] max-md:-mb-16 lg:-mb-12 "
      />
    </div>
  );

  return (
    <section
      className="max-w-7xl relative flex flex-col mx-auto justify-center max-md:px-0.5 md:px-4 py-20 max-md:py-16  max-md:mx-1 max-lg:mx-9"
      id="about"
    >
      <div className="text-left max-md:text-center mb-12">
        <h2 className="text-[#303030] font-archivo font-bold text-[28px] md:text-[42px] 2xl:text-5xl">
          What is Backyard?
        </h2>
      </div>

      <div className="w-full lg:hidden">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className="!w-full">
              <Card {...card} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-pagination mt-4 flex max-md:justify-center justify-start pl-4"></div>
      </div>

      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-20 2xl:gap-36">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default What;
