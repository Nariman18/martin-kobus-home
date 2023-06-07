import { PortableTextBlock, Reference } from "sanity";


export type Page = {
    _id: string;
    _createdAt: Date;
    title: string;
    mainImage: string,
    images: string[];
    slug: string
    content: PortableTextBlock[];
    styleClass: string;
    
}

