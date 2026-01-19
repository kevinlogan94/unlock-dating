import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createAuthorSchema = () => z.object({
  name: z.string(),
  avatar: z.object({
    src: z.string(),
    alt: z.string()
  }).optional()
})

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        image: z.string(),
        minRead: z.number().optional(),
        author: createAuthorSchema(),
        seo: z.object({
          title: z.string().optional(),
          description: z.string().optional()
        }).optional()
      })
    }),
    pages: defineCollection({
      type: 'page',
      source: [
        { include: 'blog.yml' }
      ],
      schema: z.object({
        title: z.string(),
        description: z.string(),
        seo: z.object({
          title: z.string().optional(),
          description: z.string().optional()
        }).optional()
      })
    })
  }
})

