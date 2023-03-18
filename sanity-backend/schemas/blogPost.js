export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{type: 'author'}],
        validation: Rule => Rule.required().error('Author is required'),
        options: {
          auth: {
            type: 'user',
            userIdField: '_id'
          }
        }
      },
      {
        name: 'body',
        title: 'Body',
        type: 'string'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to:[{
          type: 'blogCategory'
        }]
      },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
   
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return {
        ...selection,
        subtitle: author && `by ${author}`
      }
    }
  }
}