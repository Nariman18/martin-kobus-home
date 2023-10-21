import { PortableTextBlock, Reference } from "sanity";


export type Page = {
    _id: string;
    _createdAt: Date;
    title: string;
    images: string[];
    slug: string
    styleClass: string;
}

