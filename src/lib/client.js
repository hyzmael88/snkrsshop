import sanityClient from '@sanity/client' 
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'lxft0xov',
    dataset:'production',
    apiVersion:'2023-01-12',
    useCdn: true,
    token: process.env.VITE_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)