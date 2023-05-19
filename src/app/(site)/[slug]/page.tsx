"use client";
import { PortableText } from "@portabletext/react";
import { getPage } from "../../../../sanity/sanity-utils";
import Image from "next/image";
import CustomScrolling from "../components/CustomScrolling";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { Page } from "../../../../types/Page";

type PageProps = {
  title: string;
  images: string[];
};

export default async function Page({ title, images }: PageProps) {
  return (
    <div>
      <h1>{title}</h1>
      {images && <CustomScrolling images={images} />}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  const page = await getPage(slug);

  return {
    props: {
      title: page.title,
      images: page.images,
    },
  };
};
