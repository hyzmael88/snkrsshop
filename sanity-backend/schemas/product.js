export default {
    name: 'product',
    type: 'document',
      title: 'Product',
    fields: [
      
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      }
      ,
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      
      {
        name: 'details',
        title: 'Details',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to:[{
          type: 'category'
        }]
      },
      {
        name: 'gender',
        title: 'Gender',
        type: 'reference',
        to:[{
          type: 'gender'
        }]
      },
      {
        name: 'sizes',
        title: 'Sizes',
        type: 'array',
        of: [{type: 'size'}],
        validation: Rule => Rule.required().error('Product must have at least one size'),
      },
      
      
      {
        name: 'image',
        title: 'Imagen',
        type: 'array',
            of:[{type: 'image'}],
        options:{
          hotspot: true
        }
      }
    ]
  }