import { MetadataRoute } from "next";
import {  getPages, getProjects } from "../../sanity/sanity-utils";

export default async function sitemap() {
    const baseUrl = "https://www.martinkobushome.com/"

    const pages = await getPages()
    const pagesUrls = pages?.map((page) =>{
        return {
            url:`${baseUrl}/pages/${page.slug}`,
            lastModified: new Date()
        }
}) ?? []

    const projects = await getProjects()
    const projectsUrls = projects.map((project) => {
        return {
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date()
        }
    })
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}About`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}Contact`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}Press`,
            lastModified: new Date()
        },
        ...pagesUrls,
        ...projectsUrls
    ]
}