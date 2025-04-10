import Image from "next/image";
import Link from "next/link";
import React from "react";
import Map from "../components/Map";
import ContactClient from "../components/contact-client";

function contactPage() {
  return (
    <div className="flex flex-col min-[1537px]:justify-center min-[1537px]:items-center 2xl:justify-normal xl:justify-normal lg:justify-center h-screen min-[1537px]:p-0 2xl:p-0 xl:p-0 lg:p-10 p-4 min-[1537px]:ml-0 xl:ml-72 md:ml-10 ml-0">
      <ContactClient />
    </div>
  );
}

export default contactPage;
