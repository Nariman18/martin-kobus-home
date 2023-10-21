"use client";
import Image from "next/image";
import React from "react";

const AboutComponent = () => {
  return (
    <div className="relative flex flex-col min-[1537px]:items-center min-[1537px]:justify-center min-[1537px]:w-full min-[1537px]:h-screen lg:h-screen lg:items-center lg:justify-center lg:flex-row">
      <div className="relative min-[1537px]:w-[720px] min-[1537px]:h-screen 2xl:w-[550px] xl:w-[570px] lg:w-[800px] md:w-[768px] w-full h-screen 2xl:h-screen xl:h-screen lg:h-[750px] md:h-[1025px] sm:h-[900px] 2xl:mt-0 xl:mt-0 mt-0">
        <Image
          src="/Kobus_Showhouse_24196 1.jpg"
          alt="aboutImage"
          fill={true}
          className="xl:object-cover lg:object-contain object-cover lg:object-center object-left xl:pl-0 lg:pl-3 pl-0"
          priority
        />
      </div>

      <div className="lg:ml-1">
        <div className="relative items-center">
          <p className="text-black min-[1537px]:w-[630px] xl:w-[630px] lg:w-[450px] w-full text-[14px] 2xl:px-2 xl:px-2 lg:px-5 px-5 lg:pt-0 md:pt-10 pt-6 font-openSans font-[300] lg:mt-[50px] mt-0">
            Martin Kobus creates bold and dynamic interiors that are
            approachable and inviting. Designing custom environments that
            resonate with clients is the hallmark of his work. Being a Dutch
            native there is a European sensibility to Martin’s vision on all
            projects. Having been immersed in all aspects of design for a
            lifetime, creating inspired interiors comes naturally. Our team of
            designers take great pride in the work that we do, and manage client
            relations efficiently and effectively. Our vendors and crafts people
            work in harmony with our team to make our vision come to life. Kobus
            Interiors is dedicated to bringing your design aspirations to
            fruition and to create beautiful interiors for living.
          </p>
          <div className="flex xl:justify-normal justify-between xl:pl-2 pl-5 xl:pr-2 pr-5 xl:p-0 lg:p-3 p-5 xl:space-x-10 lg:space-x-3 space-x-0 xl:mt-5 lg:mt-0 md:mt-20 mt-12">
            <div className="relative flex items-center 2xl:w-[265px] xl:w-[265px] lg:w-[200px] md:w-[340px] w-[170px] 2xl:h-[290px] xl:h-[290px] lg:h-[290px] md:h-[370px] h-[185px] lg:mt-3 sm:mr-0 mr-10">
              <Image
                src="/Rectangle 57.jpg"
                alt="aboutImage2"
                fill={true}
                className="object-contain"
              />
              <h1 className="absolute w-full 2xl:top-[300px] xl:top-[300px] lg:top-[260px] md:top-[-35px] top-[-20px] md:text-[14px] text-[13px] font-openSans font-[300]">
                Chris Bergin, VP
              </h1>
            </div>

            <div className="relative flex flex-col items-center 2xl:w-[265px] xl:w-[265px] lg:w-[200px] md:w-[340px] w-[170px] 2xl:h-[290px] xl:h-[290px] lg:h-[290px] md:h-[370px] h-[185px] lg:mt-3 sm:ml-0 ml-10">
              <Image
                src="/Rectangle 56.jpg"
                alt="aboutImage2"
                fill={true}
                className="object-contain"
              />
              <h1 className="absolute w-full 2xl:top-[300px] xl:top-[300px] lg:top-[260px] md:top-[-35px] top-[-20px] md:text-[14px] text-[13px] font-openSans font-[300]">
                Astrid Kobus, CFO
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
