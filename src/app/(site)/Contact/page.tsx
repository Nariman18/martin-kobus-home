import Image from "next/image";
import Link from "next/link";
import React from "react";
import Map from "../components/Map";

function contactPage() {
  return (
    <div className="flex flex-col min-[1537px]:justify-center min-[1537px]:items-center 2xl:justify-normal xl:justify-normal lg:justify-center h-screen min-[1537px]:p-0 2xl:p-0 xl:p-0 lg:p-10 p-4 min-[1537px]:ml-0 xl:ml-72 md:ml-10 ml-0">
      <div className="lg:flex lg:flex-row flex flex-col-reverse min-[1537px]:mt-0 2xl:mt-[170px] xl:mt-[170px] lg:mt-0 md:mt-[200px] lg:space-x-0 sm:space-x-8 ">
        <div className="absolute w-[80px] h-[80px] xl:hidden lg:hidden md:top-[150px] top-[100px] md:left-[330px] sm:left-[46px] left-[15px] justify-center items-center">
          <Image
            src="/Logo-Grey-fill.jpg"
            alt="Logo Image"
            className="object-contain"
            fill={true}
          />
        </div>
        <Link
          className="relative lg:mt-0 md:mt-14 mt-20 imac-24:w-[2500px] imac-24:h-[1550px] xl:w-[753px] xl:h-[465px] lg:w-[753px] lg:h-[465px] md:w-[590px] md:h-[365px] sm:w-[490px] sm:h-[300px] w-full h-[205px] lg:ml-0 md:ml-12 ml-0"
          href="https://www.google.com/maps/place/4000+Bridgeway+%23318,+Sausalito,+CA+94965,+%D0%A1%D0%A8%D0%90/@37.8713589,-122.5061788,17z/data=!3m1!4b1!4m5!3m4!1s0x808585107415e227:0xc8d05a85c68d4fe2!8m2!3d37.8713589!4d-122.5036039?entry=ttu"
        >
          <Map />
        </Link>
        <div className="flex flex-col md:mt-0 mt-40 lg:pl-5 pl-0">
          <div className="relative xl:w-[80px] xl:h-[80px] lg:w-[80px] lg:h-[80px]">
            <Image
              src="/Logo-Grey-fill.jpg"
              alt="Logo Image"
              className="object-contain"
              fill={true}
            />
          </div>

          <div className="mt-8">
            <p className="font-openSans font-[300] text-[14px]">
              info@martinkobusinc.com
            </p>
          </div>

          <div className="mt-8">
            <p className="w-[200px] font-openSans font-[300] text-[14px] leading-6">
              4000 Bridgeway #318 Sausalito, CA 94965{" "}
            </p>

            <p className="mt-5 w-[170px] font-openSans text-[14px] font-[300] leading-6">
              Phone: (415) 331-3755 Fax: (415) 331 4541
            </p>
          </div>

          <div className="mt-8">
            <div className="flex items-center space-x-1 mt-1">
              <Link
                href="https://www.instagram.com/kobus_interiors/?hl=en#"
                className="relative xl:w-[25px] xl:h-[25px] lg:w-[25px] lg:h-[25px] md:w-[20px] md:h-[20px] w-[25px] h-[25px]"
              >
                <Image
                  src="/logo_instagram.svg"
                  alt="Instagram Icon"
                  fill={true}
                  className="object-contain"
                />
              </Link>

              <Link
                href="https://www.instagram.com/kobus_interiors/?hl=en#"
                className="font-openSans font-[300] text-[14px] md:text-sm text-sm"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactPage;
