export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required().error('Author name is required')
      },
      {
        name: 'email',
        title: 'Email',
        type: 'email',
        validation: Rule => Rule.required().error('Author email is required')
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text'
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      // ...
    ],
    // ...
  }
  