"use client";

import React from "react";
import Image from "next/image";
import HeaderComponent from "../components/ClientComponents/Header";
import FooterComponent from "../components/ClientComponents/Footer";
import MapComponent from "../components/ClientComponents/OtherComponents/Map";
import ProductsComponent from "../components/ClientComponents/OtherComponents/Products";
import OnlinePostsComponent from "@/components/ClientComponents/OtherComponents/OnlinePosts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  return (
    <>
      <div className="relative  w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute  top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/shaaa_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="h-50 md:h-[70px] z-50 ">
          <HeaderComponent />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

        <div className="relative z-30 flex flex-col mr-5 ml-5 md:mr-20 md:ml-20 lg:mr-44 lg:ml-44 mt-14 md:mt-40 2xl:mt-66 items-center text-center h-[1080px]">
          <Image
            src="/images/shaaa_white_logo.png"
            alt="Logo"
            width={223}
            height={115}
            className="w-[120px] h-[70px] md:w-[223px] md:h-[115px]  mb-6"
          />
          <h1
            style={{ fontFamily: "MADE TOMMY Bold" }}
            className=" text-white w-full font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[60px] xxl:text-[70px] leading-[40px] md:leading-[60px] lg:leading-[80px] xl:leading-[90px] 2xl:text-[80px]"
          >
            IT'S ALL ABOUT SHAWARMA
          </h1>
        </div>
      </div>
      <div className="  w-full flex flex-col justify-center  items-center   ">
        <div className="w-full flex justify-center h-[600px] xl:h-[630px] 2xl:h-[750px] relative bg-[url('/images/craving_bg.png')] bg-cover bg-center">
          {/* Black overlay */}
          <div className="absolute inset-0 bg-[#000000]/40 z-0" />
          <div className="relative w-full flex flex-col items-center mt-[-150px]  z-10 ">
            <ProductsComponent />
          </div>
        </div>

        <div className="w-full lg-h[650px] 2xl:h-[735px] bg-[url('/images/Group.png')] bg-cover bg-center  flex items-center justify-center relative">
          <div className="absolute w-full h-[735px] inset-0 bg-[#000000]/30 z-0"></div>
          <div className="relative z-10 w-[70%] flex flex-col items-center  lg:grid  lg:grid-cols-2   justify-center text-center">
            <div className="xl:mt-[-100px] 2xl:mt-[-200px]">
              <h1 className="text-outline text-left md:w-[70%] xl:w-[85%]   text-[#ED3937] text-2xl md:text-3xl lg:text-4xl  xl:text-5xl 2xl:text-[70px] font-bold pb-3.5 xl:pb-4 2xl:pb-[30px] uppercase">
                FIND A SHA... NEAR YOU
              </h1>
              <p className="text-base md:text-xl 2xl:text-2xl  w-full pb-3.5 xl:pb-4  2xl:pb-[30px] flex   justify-start  mt-0 text-[#D1C1C5] text-center">
                We have 20+ stores across Saudi Arabia
              </p>
              <div className="flex gap-2 2xl:gap-4   flex-col sm:flex-row">
                <button className=" flex cursor-pointer gap-2 items-center px-2 2xl:px-5 py-1 rounded-md  border text-white border-[#C0C1C1] bg-black">
                  <span>
                    <FontAwesomeIcon
                      icon={faApple}
                      className="text-[40px] text-white"
                    />
                  </span>
                  <span className="flex flex-col items-start">
                    <p className="text-xs text-left">
                      Download on the
                    </p>
                    <p className="text-xs md:text-sm 2xl:text-lg text-left">
                      App Store
                    </p>
                  </span>
                </button>
                <button className=" flex cursor-pointer gap-2 items-center px-2 2xl:px-5 py-1 rounded-md  border text-white border-[#C0C1C1] bg-black">
                  <span className="text-4xl text-white">
                    <Image
                      src={"/images/Icon.png"}
                      alt="Google Play"
                      width={40}
                      height={40}
                    />
                  </span>
                  <span className="flex flex-col items-start">
                    <p className="text-xs   text-left">
                      GET IT ON
                    </p>
                    <p className="text-xs md:text-sm 2xl:text-lg text-left">
                      Google Play
                    </p>
                  </span>
                </button>
                <button className=" flex cursor-pointer gap-2 items-center px-2 2xl:px-5 py-1 rounded-md  border text-white border-[#C0C1C1] bg-black">
                  <span className="text-4xl text-white">
                    <Image
                      src={"/images/app.svg.png"}
                      alt="Google Play"
                      width={40}
                      height={40}
                    />
                  </span>
                  <span className="flex flex-col items-start">
                    <p className="text-xs   text-left">
                      EXPLORE IT ON
                    </p>
                    <p className="text-xs md:text-sm 2xl:text-lg text-left">
                      App Gallery
                    </p>
                  </span>
                </button>
              </div>
            </div>

            <div className="flex justify-start items-center mt-20 lg:mt-0 l h-[500] w-[500] xl:h-[562] 2xl:w-[770] relative  top-[-120px] 2xl:top-[-120px] right-0">
              <Image
                src={"/images/mobiles.png"}
                alt=""
                height={532}
                width={750}
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-[100%]  z-10 mt-[-150px]  ">
          <div className="flex flex-col  pb-3 pt-[100px] bg-gradient-to-b from-transparent via-black to-black   items-center w-full">
            <h1 className="text-outline text-center pt-6 md:w-[70%] xl:w-[85%]   text-[#ED3937] text-2xl md:text-3xl lg:text-4xl  xl:text-5xl 2xl:text-[70px] font-bold pb-3.5 xl:pb-4 2xl:pb-[30px] uppercase">
              FIND A SHA... NEAR YOU
            </h1>
            <p className="text-base md:text-xl 2xl:text-2xl  w-full pb-3.5 xl:pb-4  2xl:pb-[30px] flex   justify-center  mt-0 text-[#D1C1C5] text-center">
              We have 20+ stores across Saudi Arabia
            </p>
          </div>
          <div>
            <MapComponent />{" "}
          </div>
        </div>

        <div className="flex bg-[#231F20] flex-col items-center pt-7 md:pt-[100px] w-full">
          <OnlinePostsComponent />
        </div>
        <div className="w-full">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
