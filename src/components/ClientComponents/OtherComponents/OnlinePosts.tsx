"use client";
import React from "react";
import Image from "next/image";
const OnlinePostsComponent = () => {
    return(<>
            <div className="flex flex-col items-center justify-center w-full">



            <h1 className="text-outline text-center md:w-[70%] xl:w-[85%]   text-[#ED3937] text-2xl md:text-3xl lg:text-4xl  xl:text-5xl 2xl:text-[70px] font-bold pb-3.5 xl:pb-4 2xl:pb-[30px] ">
            Shaaa Moments, Shared Online
            </h1>
            <p className="text-base md:text-xl 2xl:text-2xl  w-full pb-3.5 xl:pb-4  2xl:pb-[30px] flex   justify-center  mt-0 text-[#D1C1C5] text-center">
            Join our community
            </p>
              <div className="w-full grid md:grid-cols-3 gap-2 ">
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