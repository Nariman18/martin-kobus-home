import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";
import { Project } from "../types/Project";
import { Page } from "../types/Page";
import { Contact } from "../types/Contact";
import { About } from "../types/About";

{
  /* Press Page */
}
export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == 'project']{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                image{
                  asset->
                }
            }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == 'project' && slug.current == $slug][0]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
               images[]{
                asset->
              }
            }`,
    { slug }
  );
}

{
  /* Work Page */
}
export async function getPages(): Promise<Page[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == 'page']{
                _id,
                _createdAt,
                title,
                "slug": slug.current,
            }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == 'page' && slug.current == $slug][0]{
                _id,
                _createdAt, 
                images[]{
                  asset->
                },
                title,
                "slug": slug.current,
            }`,
    { slug }
  );
}

export async function getContact(): Promise<Contact> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == 'contact'][0]{
      _id,
      _createdAt,
      "logoImage": logo.asset->url,
      email,
      address,
      phone,
      fax,
      socialLogo,
      socialName,
      socialLink,
      footerNote
    }`
  );
}

{
  /*About Page*/
}
export async function getAbout(): Promise<About> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == 'about'][0]{
        _id,
        _createdAt,
        mainImage,
        aboutDescription,
        leftImage,
        leftImageDescription,
        rightImage,
        rightImageDescription,
      }`
  );
}
