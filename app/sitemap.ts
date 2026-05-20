import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://markbuchan.co.uk', lastModified: new Date() },
    { url: 'https://markbuchan.co.uk/book', lastModified: new Date() },
    { url: 'https://markbuchan.co.uk/about', lastModified: new Date() },
    { url: 'https://markbuchan.co.uk/work-with-me', lastModified: new Date() },
    { url: 'https://markbuchan.co.uk/resources', lastModified: new Date() },
    { url: 'https://markbuchan.co.uk/resources/blog', lastModified: new Date() },
    { url: 'https://markbuchan.co.uk/resources/blog/interview-trap', lastModified: new Date() },
    { url: 'https://markbuchan.co.uk/diagnostic', lastModified: new Date() },
    { url: 'https://markbuchan.co.uk/leadership-alignment-diagnostic', lastModified: new Date() },
    { url: 'https://markbuchan.co.uk/hr-values-alignment', lastModified: new Date() },
  ]
}