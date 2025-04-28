"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import CookiesList from "./Utills/constants";
import Link from "next/link";
import MapComponent from "./components/map";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("Saudi Arabia");

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <div className="relative h-[1080px] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/golden.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />
        <div className="relative z-50 pt-10 p-8 flex justify-center">
          <HeaderComponent />
        </div>

        <div className="relative z-20 flex flex-col mr-5 ml-5 md:mr-20 md:ml-20 lg:mr-44 lg:ml-44 mt-66 items-center text-center h-[1080px]">
          <h1 className=" text-white w-full font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
            Irresistible From First Bite
          </h1>
          <p className="mt-5 text-white font-normal w-full text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed ">
            The perfect balance of crisp, chewy, and melt-in-your-mouth
            goodness. One taste, and you&apos;ll know—this is cookie perfection.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-[#BFDFD7] text-[#3B2121] text-xs sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed  font-normal px-8 py-4 rounded-[10px]">
              Order Now
            </button>
            <button className="bg-[#EDD0B7] text-[#3B2121] text-xs sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed font-normal px-8 py-4 rounded-[10px]">
              Find a Store Near You
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#FEF1DE]  w-full flex flex-col justify-center  items-center  ">
        <div className="relative flex bg-white flex-col md:flex-row   rounded-[20px] gap-9 shadow-xl px-10 py-10 w-[90%] mt-[-28px]   z-10">
          <Image
            src="/images/Vector.png"
            alt="star"
            width={70}
            height={70}
            className="absolute top-0 left-0"
          />
          <div className="flex flex-col justify-center  md:w-2/3">
            <h1 className=" font-bold text-[#2C2C28]  text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed">
              Crafted To Crave
            </h1>
            <p className="text-[#575757]  mt-2  text-[14px] sm:text-[14px] md:text-base lg:text-base xl:text-base leading-relaxed ">
              From a simple idea to Saudi’s Favorite Cookies. It all started
              with one goal—to create the most unforgettable brownie cookie.
              Since 2006, Golden Brown has set the standard for rich, indulgent
              baked goods across Saudi Arabia and the GCC. Our secret?
            </p>
            <ul className="mt-6 space-y-3  text-[14px] sm:text-[14px] md:text-base lg:text-base xl:text-base leading-relaxed text-[#3C2013] font-normal">
              <li className="flex items-center gap-2">
                <Image
                  src="/images/Vector.png"
                  width={15}
                  height={15}
                  alt="icon"
                />
                <span>Premium Ingredients</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/images/Vector.png"
                  width={15}
                  height={15}
                  alt="icon"
                />
                <span>Innovative Flavors</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/images/Vector.png"
                  width={15}
                  height={15}
                  alt="icon"
                />
                <span>Perfect Texture—Crispy Edges, Gooey Center</span>
              </li>
            </ul>
          </div>
          <div className="relative  md:w-1/3 flex justify-center items-center">
            <Image
              src="/images/star3.png"
              alt="sparkle"
              width={41}
              height={41}
              className="absolute top-[-15px] right-44"
            />
            <Image
              src="/images/star3.png"
              alt="sparkle"
              width={28}
              height={28}
              className="absolute hidden sm:flex top-[-18px] right-65"
            />
            <Image
              src="/images/star2.png"
              alt="sparkle"
              width={61}
              height={61}
              className="absolute bottom-[-15px] right-[-15px]"
            />
            <Image
              src="/images/cookie.png"
              alt="cookies"
              width={367}
              height={240}
              className="z-10 w-[300px] h-[180px]  lg:w-[367px] lg:h-[240px] xl:w-[367px] xl:h-[240px]"
            />
            <Image
              src="/images/heart.png"
              alt="sparkle"
              width={90}
              height={85}
              className="absolute hidden lg:flex bottom-[18px] right-57 z-20"
            />
          </div>
        </div>
        <div className="w-[90%] mt-22">
          <div className="flex flex-col items-center">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed font-bold text-[#2C2C28]">
              The Cookie Collection
            </h1>
            <h4 className="text-base  lg:text-xl xl:text-2xl leading-relaxed font-bold text-[#3C2013]">
              Indulgence, Packaged to Perfection
            </h4>
            <p className="text-[14px] sm:text-[14px] md:text-base lg:text-base xl:text-base leading-relaxed p-2 font-normal text-[#575757]  text-center">
              Each bite tells a story of craftsmanship, flavor, and pure
              satisfaction. Golden Brown cookies are perfect for gifting,
              sharing, or just treating yourself.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 place-items-center">
            {CookiesList.map((item, index) => (
              <Link
                href="#"
                key={index}
                className="w-[297px] h-[400px] bg-white rounded-[10px] shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center overflow-hidden"
              >
                <Image
                  src={item.Image}
                  width={297}
                  height={297}
                  alt={item.Name}
                  className="object-cover rounded-t-[10px]"
                />
                <div className="p-4 flex flex-col  flex-1 w-full">
                  <h2 className="text-[16px]  font-bold text-[#3C2013] text-left">
                    {item.Name}
                  </h2>
                  <p className="text-[15px] font-normal text-[#575757] text-left mt-2">
                    {item.Description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <MapComponent selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
        <div className="relative flex flex-col bg-white rounded-[20px] justify-center shadow-xl px-5 py-12 w-[90%] mt-20 z-10">
          <div className="flex flex-col justify-center items-center ">
            <h1 className=" text-center text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed  font-bold text-[#2C2C28]">
              Get It Anytime, Anywhere
            </h1>
            <p className="text-[#3C2013] text-base  lg:text-xl xl:text-2xl leading-relaxed">
              Your Favorite Cookies, Delivered
            </p>
          </div>
          <div className="grid grid-cols-3 gap-7 p-5 md:flex md:justify-evenly md:gap-2 mt-7 md:items-center ">
            <Image src="/images/panda.png" alt="star" width={72} height={48} />
            <Image
              src="/images/mrsool.png"
              alt="star"
              width={112}
              height={48}
            />
            <Image src="/images/jahez.png" alt="star" width={114} height={37} />
            <Image
              src="/images/talabet.png"
              alt="star"
              width={112}
              height={23}
            />
            <Image src="/images/ninja.png" alt="star" width={106} height={33} />
            <Image src="/images/noon.png" alt="star" width={88} height={44} />
            <Image src="/images/chefz.png" alt="star" width={89} height={46} />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 w-full">
          <h1 className=" text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed  font-bold text-[#2C2C28] ">
            Sweet Moments, Shared Online
          </h1>
          <p className=" p-2 font-normal text-[#3C2013]  text-center text-[14px] sm:text-[14px] md:text-base lg:text-base xl:text-base leading-relaxed">
            Tag @gbbakeryksa & Get Featured!
          </p>
          <div className="w-full grid md:grid-cols-3 gap-1 mt-4 p-1">
            <div className="flex  justify-center">
              <div className="grid grid-cols-2 gap-1">
                <div>
                  {" "}
                  <Image
                    src="/images/f1.png"
                    width={311}
                    height={311}
                    alt="picture"
                  />{" "}
                </div>
                <div>
                  {" "}
                  <Image
                    src="/images/f2.png"
                    width={311}
                    height={311}
                    alt="picture"
                  />{" "}
                </div>
                <div>
                  {" "}
                  <Image
                    src="/images/f3.png"
                    width={311}
                    height={297}
                    alt="picture"
                  />{" "}
                </div>
                <div>
                  {" "}
                  <Image
                    src="/images/f4.png"
                    width={311}
                    height={311}
                    alt="picture"
                  />{" "}
                </div>
              </div>
            </div>

            <div className="flex  justify-center">
              <Image
                src="/images/f5.png"
                width={632}
                height={632}
                alt="picture"
              />
            </div>
            <div className="flex  justify-center">
              <div className="grid grid-cols-2 gap-1">
                <Image
                  src="/images/f6.png"
                  width={311}
                  height={311}
                  alt="picture"
                />
                <Image
                  src="/images/f7.png"
                  width={311}
                  height={311}
                  alt="picture"
                />
                <Image
                  src="/images/f8.png"
                  width={311}
                  height={311}
                  alt="picture"
                />
                <Image
                  src="/images/f9.png"
                  width={311}
                  height={311}
                  alt="picture"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}