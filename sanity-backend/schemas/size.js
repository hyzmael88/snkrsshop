export const size = {
    name: 'size',
    title: 'Size',
    type: 'object',
    fields: [
      {
        name: 'size',
        title: 'Size ',
        type: 'string',
        validation: Rule => Rule.required().error('Size  is required'),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.required().error('Price is required'),

      },
      {
        name: 'stock',
        title: 'Stock',
        type: 'number',
        validation: Rule => Rule.required().error('Stock is required'),
      },
      {
        name: 'sales',
        title: 'Sales',
        type: 'number'
      },
      
     
    
    ],
  }