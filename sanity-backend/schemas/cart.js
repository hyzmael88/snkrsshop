export default {
    name: 'cart',
    type: 'document',
    title: 'Cart',
    fields: [
     
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                title: 'Product',
                type: 'reference',
                to: [{ type: 'product' }]
              },
              {
                name: 'size',
                title: 'Size',
                type: 'reference',
                to: [{ type: 'size' }]
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number'
              }
            ]
          }
        ]
      }
    ]
  }