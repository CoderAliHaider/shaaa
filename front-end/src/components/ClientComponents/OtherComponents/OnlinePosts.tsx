"use client";
import React from "react";
import Image from "next/image";
const OnlinePostsComponent = () => {
    return(<>
            <div className="flex flex-col items-center mt-4 justify-center w-full">
        <h1 className="text-outline text-center  w-[80%] text-2xl md:text-3xl lg:text-5xl  xl:text-6xl text-[#ED3937] pt-16 pb-2 flex justify-center  font-bold uppercase">
        Shaaa Moments, Shared Online
        </h1>
              <p className=" p-2 font-normal text-[#D1C1C5]  text-center text-[14px] sm:text-[14px] md:text-base lg:text-base xl:text-[24px] leading-relaxed">
              Join our community
              </p>
              <div className="w-full grid md:grid-cols-3 gap-2   mt-4 p-1">
                <div className="flex  justify-center">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      {" "}
                      <Image
                        src="/images/post1.png"
                        width={311}
                        height={311}
                        alt="picture"
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <Image
                        src="/images/post2.png"
                        width={311}
                        height={311}
                        alt="picture"
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <Image
                        src="/images/post3.png"
                        width={311}
                        height={297}
                        alt="picture"
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <Image
                        src="/images/post4.png"
                        width={311}
                        height={311}
                        alt="picture"
                      />{" "}
                    </div>
                  </div>
                </div>
    
                <div className="flex  justify-center">
                  <Image
                    src="/images/post5.png"
                    width={632}
                    height={632}
                    alt="picture"
                  />
                </div>
                <div className="flex  justify-center">
                  <div className="grid grid-cols-2 gap-2">
                    <Image
                      src="/images/post6.png"
                      width={311}
                      height={311}
                      alt="picture"
                    />
                    <Image
                      src="/images/post7.png"
                      width={311}
                      height={311}
                      alt="picture"
                    />
                    <Image
                      src="/images/post8.png"
                      width={311}
                      height={311}
                      alt="picture"
                    />
                    <Image
                      src="/images/post9.png"
                      width={311}
                      height={311}
                      alt="picture"
                    />
                  </div>
                </div>
              </div>
            </div>
    
    </>);
}
export default OnlinePostsComponent;   