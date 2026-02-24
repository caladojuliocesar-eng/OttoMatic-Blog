import { groq } from 'next-sanity'

export const ALL_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage
}`

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  body
}`

export const ALL_POST_SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`
