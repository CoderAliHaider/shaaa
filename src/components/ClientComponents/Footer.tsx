import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#231F20] text-[#ED3937] pt-10 pb-5">
      <div className="container mx-auto px-6 md:px-20 lg:px-30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-[#ffffff33]">
          <div>
            <Image
            src="/images/shaaa_logo.png"
              alt="shaaa logo"
              width={90}
              height={52}
              className="object-contain"
            />
          </div>
          <div className="text-center flex gap-4 md:gap-40 text-xs md:text-sm">
            <Link   href={"tel:549533944"} className="mb-3 flex gap-2 items-center">
              <div>
            <span className="flex justify-center items-center  h-[30px] w-[30px]  ">
              <Image
                src="/images/phone.svg"
                alt="Snapchat"
                width={30}
                height={30}            
                  />
            </span>
              </div>
              <div>
                <p className=" font-medium text-sm md:text-base text-left text-white">
                  {" "}
                  Call Us
                </p>
                <p className=" text-left font-normal text-sm md:text-base  text-[#8D8C8E]">549533944</p>
              </div>
            </Link>
            <Link href={'mailto:smedia@shaa.com.sa'} className="mb-3 flex gap-2 items-center">
              <div>
            <span className="flex justify-center items-center  h-[30px] w-[30px]  ">
              <Image
                src="/images/m.svg"
                alt="Snapchat"
                width={30}
                height={30}            
                  />
            </span>
              </div>
              <div>
                <p className=" font-medium text-sm md:text-base  text-left text-white">
                  Email Us
                </p>
                <p className=" text-left font-normal text-sm md:text-base  text-[#8D8C8E]">smedia@shaa.com.sa</p>
              </div>
            </Link>
          </div>
          <div className="flex gap-4 text-[#231F20] text-md ">
          <Link href={"https://instagram.com/shaaaaa.sa"} className="flex justify-center items-center  h-[30px] w-[30px]  ">
              <Image
                src="/images/insta.svg"
                alt="Snapchat"
                width={30}
                height={30}            
                  />
            </Link>
            <Link href={"https://tiktok.com/@shaaaaa.sa"} className="flex justify-center items-center  h-[30px] w-[30px]  ">
              <Image
                src="/images/tik.svg"
                alt="Snapchat"
                width={30}
                height={30}            
                  />
            </Link>
            <Link href={"https://www.snapchat.com/add/shaaaa.sa"} className="flex justify-center items-center  h-[30px] w-[30px]  ">
              <Image
                src="/images/snap.svg"
                alt="Snapchat"
                width={30}
                height={30}            
                  />
            </Link>
           
          </div>
        </div>
        <div className="text-center  flex flex-col md:flex-row  justify-between font-normal text-sm 2xl:text-base text-[#676668] pt-4">
          <p>Copyright © <span className="text-white">SHAA...</span> 2025. All rights reserved.</p>
          <p>Terms & Conditions  |  Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
