export default {
  name: 'facebookUser',
  type: 'document',
  title: 'Facebook User',
  hooks: {
    async create(user) {
      user.registerDate = new Date();
    }
  },

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'facebookId',
      title: 'Facebook ID',
      type: 'string',
    },
    {
      name: 'picture',
      title: 'Picture',
      type: 'string'
    },
    {
      name: 'registerDate',
      title: 'Register Date',
      type: 'datetime'
    },
    {
      name: 'cart',
      title: 'Cart',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
         
          {
            name: 'id',
            title: 'ID',
            type: 'string',
            validation: Rule => Rule.required()
          },

          {
            name: 'name',
            title: 'Name',
            type: 'string'
          },
          {
            name: 'image',
            title: 'Image',
            type: 'string'
          },
          {
            name: 'size',
            title: 'Size',
            type: 'string'
          },
          {
            name: 'price',
            title: 'Price',
            type: 'number'
          },
          {
            name: 'quantity',
            title: 'Quantity',
            type: 'number'
          }
          
         

          
        ]
      }]
    }
  ]
}