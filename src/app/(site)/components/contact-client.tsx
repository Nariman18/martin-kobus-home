import Link from "next/link";
import React from "react";
import Image from "next/image";
import Map from "../components/Map";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../../sanity/lib/image";

type Props = {
  email: string;
  address: string;
  phone: string;
  fax: string;
  logoImage: SanityImageSource;
  socialLogo: SanityImageSource;
  socialName: string;
  socialLink: string;
  footerNote: PortableTextBlock[];
};

function ContactClient({
  email,
  address,
  phone,
  fax,
  logoImage,
  socialLogo,
  socialName,
  socialLink,
  footerNote,
}: Props) {
  return (
    <div className="lg:flex lg:flex-row flex flex-col-reverse min-[1537px]:mt-0 2xl:mt-[170px] xl:mt-[170px] lg:mt-0 md:mt-[200px] lg:space-x-0 sm:space-x-8 ">
      <div className="absolute w-[80px] h-[80px] xl:hidden lg:hidden md:top-[150px] top-[100px] md:left-[330px] sm:left-[46px] left-[15px] justify-center items-center">
        {logoImage && (
          <Image
            src={urlFor(logoImage).width(1600).quality(80).url()}
            alt="Logo Image"
            className="object-contain"
            fill={true}
          />
        )}
      </div>
      <Link
        className="relative lg:mt-0 md:mt-14 mt-20 imac-24:w-[2500px] imac-24:h-[1550px] xl:w-[753px] xl:h-[465px] lg:w-[753px] lg:h-[465px] md:w-[590px] md:h-[365px] sm:w-[490px] sm:h-[300px] w-full h-[205px] lg:ml-0 md:ml-12 ml-0"
        href="https://www.google.com/maps/place/4000+Bridgeway+%23318,+Sausalito,+CA+94965,+%D0%A1%D0%A8%D0%90/@37.8713589,-122.5061788,17z/data=!3m1!4b1!4m5!3m4!1s0x808585107415e227:0xc8d05a85c68d4fe2!8m2!3d37.8713589!4d-122.5036039?entry=ttu"
      >
        <Map />
      </Link>
      <div className="flex flex-col md:mt-0 mt-40 lg:pl-5 pl-0">
        <div className="relative xl:w-[80px] xl:h-[80px] lg:w-[80px] lg:h-[80px]">
          {logoImage && (
            <Image
              src={urlFor(logoImage).width(1600).quality(80).url()}
              alt="Logo Image"
              className="object-contain"
              fill={true}
            />
          )}
        </div>

        <div className="mt-8">
          <p className="font-openSans font-[300] text-[14px]">{email}</p>
        </div>

        <div className="mt-8">
          <p className="w-[200px] font-openSans font-[300] text-[14px] leading-6">
            {address}
          </p>

          <p className="mt-5 w-[170px] font-openSans text-[14px] font-[300] leading-6">
            {phone}
          </p>
          <p className="w-[170px] font-openSans text-[14px] font-[300] leading-6">
            {fax}
          </p>
        </div>

        <div className="flex flex-col mt-8">
          <div className="flex items-center space-x-1 mt-1">
            <Link
              href={
                socialLink || "SocialLink is not uploaded from the dashboard"
              }
              className="relative xl:w-[25px] xl:h-[25px] lg:w-[25px] lg:h-[25px] md:w-[20px] md:h-[20px] w-[25px] h-[25px]"
            >
              {socialLogo && (
                <Image
                  src={urlFor(socialLogo).width(1600).quality(80).url()}
                  alt="Instagram Icon"
                  fill
                  className="object-contain"
                />
              )}
            </Link>

            <Link
              href={
                socialLink || "SocialLink is not uploaded from the dashboard"
              }
              className="font-openSans font-[300] text-[14px] md:text-sm text-sm"
            >
              {socialName}
            </Link>
          </div>
        </div>
        {footerNote && footerNote.length > 0 && (
          <div className="flex flex-col mt-8">
            <div className="font-openSans font-[300] text-[14px] md:text-sm text-sm">
              <PortableText value={footerNote} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactClient;
