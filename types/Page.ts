import { PortableTextBlock } from "sanity";


export type Page = {
    _id: string;
    _createdAt: Date;
    title: string;
    images: string[];
    slug: string;
    content: PortableTextBlock[];
    alt: string;
}