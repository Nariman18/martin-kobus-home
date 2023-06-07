import Image from "next/image";
import Link from "next/link";
import React from "react";

function contactPage() {
  return (
    <div className="flex flex-col items-start h-screen">
      <h1 className="text-[#212121] absolute top-[110px] left-[725px] font-[600] font-openSans uppercase text-xl tracking-[0.03em]">
        Contact
      </h1>
      <div className="flex mt-[220px] ml-[50px] space-x-8 pl-10">
        <Link href="https://www.google.com/maps/place/4000+Bridgeway+%23318,+Sausalito,+CA+94965,+%D0%A1%D0%A8%D0%90/@37.8713589,-122.5061788,17z/data=!3m1!4b1!4m5!3m4!1s0x808585107415e227:0xc8d05a85c68d4fe2!8m2!3d37.8713589!4d-122.5036039?entry=ttu">
          <Image
            src="/Rectangle 51.jpg"
            alt="Map Image"
            className="object-contain"
            width={752}
            height={550}
          />
        </Link>
        <div className="flex flex-col">
          <Image
            src="/Logo-Grey-fill.jpg"
            alt="Logo Image"
            width={80}
            height={40}
          />

          <div className="mt-5 space-y-1">
            <p className="font-openSans font-[600] uppercase w-[330px]">
              For general inquiries, please contact our Sausalito Office:
            </p>
            <p className="font-openSans underline decoration-1">
              INFO@MARTINKOBUSINC.COM
            </p>
          </div>

          <div className="mt-5 space-y-1">
            <h1 className="font-openSans font-[600] uppercase">Address:</h1>
            <p className="w-[200px] font-openSans">
              4000 BRIDGEWAY STE 318 SAUSALITO, CA 94965 PHONE: (415) 331-3755
              FAX: (415) 331 4541
            </p>
          </div>

          <div className="mt-5">
            <h1 className="uppercase font-openSans font-[600]">
              Social Media:
            </h1>
            <div className="flex items-center space-x-1 mt-1">
              <div>
                <Image
                  src="/logo_instagram.svg"
                  alt="Instagram Icon"
                  width={25}
                  height={25}
                  className="object-contain"
                />
              </div>

              <Link
                href="https://www.instagram.com/kobus_interiors/?hl=en#"
                className="uppercase font-openSans font-[400] text-sm"
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
