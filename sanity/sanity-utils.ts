    import { createClient, groq } from "next-sanity";
    import {apiVersion, dataset, projectId} from "./env"
    import { Project } from "../types/Project";
    import { client } from "./lib/client";
    import { Page } from "../types/Page";


    export async function getProjects(): Promise<Project[]> {
        const client = createClient({
            projectId,
            dataset,
            apiVersion,
        })

        return client.fetch(
            groq`*[_type == 'project']{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                url,
                content
            }`
        )
    }


    export async function getProject(slug: string): Promise<Project> {
        const client = createClient({
            projectId,
            dataset,
            apiVersion,
        })

        return client.fetch(
            groq`*[_type == 'project' && slug.current == $slug][0]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                "images": images[].asset->url,
                url,
                content
            }`,
            {slug}
        )
    }


    //This function for getting all the links(slug) to show up on the screen(front-end).
    export async function getPages(): Promise<Page[]> { //You can find the fetching process of this function inside my Header component.
        const client = createClient({
            projectId,
            dataset,
            apiVersion,
        })

        return client.fetch(
            groq`*[_type == 'page']{
                _id,
                _createdAt,
                title,
                "mainImage": mainImage.asset->url,
                "slug": slug.current,
            }`
        )
    }

    //This function below for getting all info(images, title, content, etc.) inside the Page
    export async function getPage(slug: string): Promise<Page> {
        const client = createClient({
            projectId,
            dataset,
            apiVersion,
        })

        return client.fetch(
            groq`*[_type == 'page' && slug.current == $slug][0]{
                _id,
                _createdAt, 
                "images": images[].asset->url,
                title,
                "slug": slug.current,
                content,
            }`,
            {slug}
        )

    }
