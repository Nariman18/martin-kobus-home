import { MetadataRoute } from "next";
import {  getPages, getProjects } from "../../sanity/sanity-utils";

export default async function sitemap() {
    const baseUrl = "https://www.martinkobushome.com/"

    const pages = await getPages()
    const pagesUrls = pages?.map((page) =>{
        return {
            url:`${baseUrl}pages/${page.slug}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9
        }
}) ?? []

    const projects = await getProjects()
    const projectsUrls = projects.map((project) => {
        return {
            url: `${baseUrl}projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9
        }
    })
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9
        },
        {
            url: `${baseUrl}About`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9
        },
        {
            url: `${baseUrl}Contact`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9
        },
        {
            url: `${baseUrl}Press`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9
        },
        ...pagesUrls,
        ...projectsUrls
    ]
}