import React from "react";
import ContactClient from "../components/contact-client";
import { getContact } from "../../../../sanity/sanity-utils";
import { Contact } from "../../../../types/Contact";

async function contactPage() {
  const contact: Contact | null = await getContact();

  if (!contact) {
    return (
      <div className="text-red-500 text-center p-10">
        <h2>Contact data is fully empty in the dashboard</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-[1537px]:justify-center min-[1537px]:items-center 2xl:justify-normal xl:justify-normal lg:justify-center h-screen min-[1537px]:p-0 2xl:p-0 xl:p-0 lg:p-10 p-4 min-[1537px]:ml-0 xl:ml-72 md:ml-10 ml-0">
      <ContactClient
        email={contact.email}
        address={contact.address}
        phone={contact.phone}
        fax={contact.fax}
        logoImage={contact.logoImage}
        socialLogo={contact.socialLogo}
        socialName={contact.socialName}
        socialLink={contact.socialLink}
        footerNote={contact.footerNote}
      />
    </div>
  );
}

export default contactPage;
