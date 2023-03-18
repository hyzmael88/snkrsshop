import React, { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY");

function Form({ cart, total }) {
  console.log(cart);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    street: "",
    country: "",
    region: "",
    city: "",
    house: "",
    zipcode: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async () => {
    console.log(formData);
    const stripe = await stripePromise;
  
    try {
      const response = await fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: cart,
          total: total
        })
      });
  
      const data = await response.json();
      const { sessionId } = data;
      
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId
      });
  
      if (result.error) {
        console.log(result.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col ">
      <h3 className="uppercase text-2xl my-4">add your delivery address</h3>

      <p className="uppercase text-sm font-bold mb-4 ">contact details</p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="first_name"
              name="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Michael"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="last_name"
              name="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Jordan"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleInputChange}
              type="tel"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="55 5555 5555"
              required
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="email@email.com"
              required
            />
          </div>
        </div>
        <p className="uppercase text-sm font-bold my-4 ">adress</p>

        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4">
            <label
              for="street"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Street <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="street"
              name="street"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Street name and number"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              for="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="country"
              name="country"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Country"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              for="region"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Region <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="region"
              name="region"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Region"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              for="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="city"
              name="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="City"
              required
            />
          </div>
          <div>
            <label
              for="house"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              House
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="house"
              name="house"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="House/apartment"
            />
          </div>
          <div>
            <label
              for="zipcode"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleInputChange}
              type="email"
              id="zipcode"
              name="zipcode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Zipcode"
              required
            />
          </div>
        </div>
        <button
          className="w-full bg-black text-white text-sm uppercase font-semibold py-4 mt-4"
          onClick={handleFormSubmit}
          type="submit"
        >
          continue
        </button>
      </form>
    </div>
  );
}

export default Form;
