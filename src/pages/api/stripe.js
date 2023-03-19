const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body.items)
    try {
const params = {
    submit_type: 'pay',
    mode: 'payment',
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'MX'],
      },
    shipping_options: [
        {shipping_rate:'shr_1MnAaaIiT4MhFXiZXwl42mDw'},
        {shipping_rate:'shr_1MnAaIIiT4MhFXiZI8MAQMtE'},
    ],
    line_items: req.body.items.map((item) =>{
        const img = item.image
        const newImage = img.replace('image-', 'https://cdn.sanity.io/images/lxft0xov/production/').replace('-png','.png')
        console.log('IMAGE', newImage)
        return{
            price_data:{
                //el currency debe ser el mismo que asignamos en los envios
                currency: 'mxn',
                product_data:{
                    name: item.name,
                    images: [newImage],

                },
                unit_amount: item.price * 100,

            },
            adjustable_quantity:{
                enabled: false,
                //minmum:1,
            },
            quantity: item.quantity
        }
    }),
   
    success_url: `${req.headers.origin}/Success`,
    cancel_url: `${req.headers.origin}/Shopping`,
  }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}