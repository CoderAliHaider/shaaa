"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "../../../styles/globals.css";
import "swiper/swiper-bundle.css";
import Products from "@/Utills/constants";
const ProductsComponent = () => {

  return (
    <>
          <div className="flex flex-col w-full items-center overflow-hidden bg-gradient-to-b pt-20 from-transparent via-black to-black ">
            <h1 className="text-outline  text-[#ED3937]  pt-32 pb-3.5 xl:pb-4 2xl:pb-[30px] w-full flex justify-center text-2xl md:text-3xl lg:text-4xl  xl:text-5xl 2xl:text-[70px] font-bold uppercase">
              CRAVING SHAWARMA?
            </h1>
            <p className="text-base md:text-xl 2xl:text-2xl  w-full pb-3.5 xl:pb-4  2xl:pb-[30px] flex   justify-center  mt-0 text-[#D1C1C5] text-center">
              You've come to the right place
            </p>
          </div>
      <div className="w-full lg:w-[75%] xl:w-[68%]">
       
    
          <div className="relative ">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                250: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {Products.map((item, index) => (
                <SwiperSlide key={index} className="!flex !justify-center ">
                  <Link
                    href="#"
                    className="bg-[#000000]/75
 border border-[#2a2a2a] rounded-2xl lg:w-[346px] lg:h-[340px] 2xl:w-[386px] 2xl:h-[380px] flex flex-col items-center justify-center overflow-hidden shadow-lg transition-transform  duration-300"
                  >
                    <Image
                      src={item.Image}
                      width={294}
                      height={218}
                      alt={item.Name}
                      className="object-contain mt-4"
                    />
                    <div className="w-full p-5 flex justify-between gap-2  items-center text-center">
                      <div>
                        <h2 className="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium  mb-1">
                          {item.Name}
                        </h2>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="flex items-center text-[18px]">
                            <Image
                              src={"/images/fire.png"}
                              alt="calories"
                              width={20}
                              height={20}
                            ></Image>
                          </span>
                          <span className="text-white text-xs md:text-[14px] 2xl:text-base font-normal">
                            365 Cal
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-lg md:text-xl   2xl:text-3xl items-center text-[#ED3937] gap-1 font-extrabold">
                        <span className="">
                          <Image
                            src={"/images/yen.png"}
                            alt="calories"
                            width={20}
                            height={20}
                          ></Image>
                        </span>
                        {item.price}.00
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="hidden md:block absolute md:left-[-0px] xl:left-[-60px] 2xl:left-[-50px] top-1/2 transform -translate-y-1/2 z-30">
              <button className="swiper-button-prev text-bold text-white  bg-[#231F20] !h-10 !w-10   rounded-full flex items-center justify-center shadow-md"></button>
            </div>

            <div className="hidden md:block absolute md:right-[-0px] xl:right-[-60px] 2xl:right-[-50px] top-1/2 transform -translate-y-1/2 z-30">
              <button className="swiper-button-next text-bold text-white bg-[#231F20] !h-10 !w-10   rounded-full flex items-center justify-center shadow-md"></button>
            </div>
          </div>

      </div>
    </>
  );
};

export default ProductsComponent;
