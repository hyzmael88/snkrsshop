import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/client";

const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [productCart, setProductCart] = useState([]);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [cart, setCart] = useState([]);
  const [movil, setMovil] = useState(false);
  const [logOutVisible, setLogOutVisible] = useState(false);

  /*   console.log(cart)
   */
  //store
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const options = ["Recent", "Popular", "Higher Price", "Lower Price"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  //Auth
  const [error, setError] = useState(null);
  const [userResponse, setUserResponse] = useState(null);
  const [facebookResponse, setFacebookResponse] = useState(null);
  const [facebookUser, setFacebookUser] = useState(null);

  //Home
  const getProducts = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    const sortedProductsRecent = [...products].sort(
      (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
    );

    const productsWMinMax = sortedProductsRecent?.map((product) => {
      const minPrice = Math.min(...product.sizes.map((size) => size.price));
      //Math.min le puedes dar una serie de numeros y te regresa el minimo
      const maxPrice = Math.max(...product.sizes.map((size) => size.price));
      return { ...product, minPrice, maxPrice };
    });

    setProducts(productsWMinMax);
  };

  const getProduct = async (productSlug) => {
    console.log(productSlug);
    const query = `*[_type == "product" && slug.current == $productSlug]`;
    const params = { productSlug };
    const product = await client.fetch(query, params);
    setProduct(product);
  };

  const getFacebookUser = async (id) => {
    if (id) {
      const query = `*[_type == "facebookUser" && facebookId == $id]`;
      const params = { id };
      const user = await client.fetch(query, params);
      console.log("dentro de getFacebookUser", user);
      if (user?.length == 0) {
        console.log("no encontré el usuario");
        return null;
      } else {
        console.log("encontré el usuario:", user);
        return user[0];
      }
    }
  };

  const getPosts = async () => {
    const query = '*[_type == "blogPost"]';
    const posts = await client.fetch(query);
    setPosts(posts);
  };
  const getPost = async (postSlug) => {
    console.log(postSlug);
    const query = `*[_type == "blogPost" && slug.current == $postSlug]`;
    const params = { postSlug };
    const post = await client.fetch(query, params);
    console.log(post);
    setPost(post);
  };
  const getCategories = async () => {
    const query = '*[_type == "category"]';
    const categories = await client.fetch(query);
    setCategories(categories);
  };
  const getGenders = async () => {
    const query = '*[_type == "gender"]';
    const genders = await client.fetch(query);
    setGenders(genders);
  };

  //Cart
  /*  function getProductWithSelectedSize(product, productSize) {
    const selectedSize = product.sizes.find((size) => size === productSize);

    if (!selectedSize) {
      return null;
    }

    return { ...product, productSizeSelected: [selectedSize] };
  } */
  const addCart = (product, productSize) => {
    console.log("agregar", product, productSize);

    const storedData = JSON.parse(localStorage.getItem("facebookUser"));
    console.log(storedData);
    if (storedData) {
      const userId = storedData.facebookId;
      getFacebookUser(userId).then((user) => {
        if (user) {
          let carrito = storedData.cart;
          console.log("cart del usuario", carrito);
          const cartItem = {
            id: product._id,
            _key: Math.random().toString(36).substr(2, 9),
            name: product.name,
            image: product.image[0].asset._ref,
            size: productSize.size,
            price: productSize.price,
            quantity: 1,
          };

          console.log("lo que vamos a agregar", cartItem);
          const index = carrito.findIndex((item) => {
            return item.id === product._id && item.size === productSize.size;
          });

          if (index !== -1) {
            carrito[index].quantity += 1;
          } else {
            carrito.push(cartItem);
          }

          console.log("carrito actualizado", carrito);

          user.cart = carrito;
          console.log("carrito dentro de usuario", user);
          updateFacebookUser(user).then((result) => {
            if (result) {
              setFacebookUser(result);
              localStorage.setItem("facebookUser", JSON.stringify(result));
            }
          });
        }
      });
    }
  };

  const deleteItemCart = (id) => {
    console.log(id);
    const storedData = JSON.parse(localStorage.getItem("facebookUser"));
    if (storedData) {
      const userId = storedData.facebookId;
      getFacebookUser(userId).then((user) => {
        console.log(user);
        if (user) {
          let cart = user.cart;
          console.log(cart);
          for (var i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
              cart.splice(i, 1);
              break;
            }
          }
          user.cart = cart;
          updateFacebookUser(user).then((result) => {
            if (result) {
              setFacebookUser(result);
              localStorage.setItem("facebookUser", JSON.stringify(result));
            }
          });
        }
      });
    }
  };

  const deleteCart = () => {
    var storedData = JSON.parse(localStorage.getItem("facebookUser"));
    if (storedData) {
      storedData.cart = [];
      localStorage.setItem("facebookUser", JSON.stringify(storedData));
      const userId = storedData.facebookId;
  console.log(userId)
      getFacebookUser(userId).then((user) => {
        if (user) {
          user.cart = [];
          console.log(user.cart)
          updateFacebookUser(user).then((result) => {
            if (result) {
              console.log(result)
              setFacebookUser(result);
              localStorage.setItem("facebookUser", JSON.stringify(result));
            }
          });
        }
      });
    }
  };

  //TODO updateFacebookUser
  function updateFacebookUser(user) {
    return client.patch(user._id).set({ cart: user.cart }).commit();
  }

  //Home
  useEffect(() => {
    getProducts();
    getPosts();
    getCategories();
    getGenders();
  }, []);

  //Cart
  useEffect(() => {
    console.log("se modifico el carrito", cart);
  }, [cart]);

  //Auth
  function createFacebookUser(userResponse) {
    client
      .create({
        _type: "facebookUser",
        name: userResponse?.name,
        email: userResponse?.email,
        facebookId: userResponse?.id,
        picture: userResponse?.picture.data.url,
        cart: [],
        registerDate: new Date(),
      })
      .then((result) => {
        console.log("Successfully created user", result);
      })
      .catch((error) => {
        console.error("Error creating user", error);
      });
  }

  useEffect(() => {
    console.log(userResponse);
    if (userResponse) {
      console.log("entre al if");
      // Intenta buscar al usuario en la base de datos
      getFacebookUser(userResponse.id).then((result) => {
        if (result) {
          // Si se encontró al usuario, lo guardamos en el estado y en el local storage
          console.log(result);
          setFacebookUser(result);
          localStorage.setItem("facebookUser", JSON.stringify(result));
        } else {
          createFacebookUser(userResponse);

          setFacebookUser(userResponse);
          localStorage.setItem("facebookUser", JSON.stringify(userResponse));
        }
      });
    }
  }, [userResponse]);

  //Store
  useEffect(() => {
    let filteredProducts = [...products];

    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category._ref === selectedCategory
      );
    }

    if (selectedGender !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.gender._ref === selectedGender
      );
    }
    if (selectedOption == "Popular") {
      filteredProducts = filteredProducts.map((product) => {
        const totalSales = product.sizes.reduce(
          (acc, size) => acc + size.sales,
          0
        );
        //reduce devuelve como resultado un valor unico

        return { ...product, totalSales };
      });

      filteredProducts.sort((a, b) => b.totalSales - a.totalSales);
    }
    if (selectedOption == "Higher Price") {
      filteredProducts.sort((a, b) => b.maxPrice - a.maxPrice);
    }
    if (selectedOption == "Lower Price") {
      filteredProducts.sort((a, b) => a.maxPrice - b.maxPrice);
    }
    setFilteredProducts(filteredProducts);
  }, [selectedCategory, selectedGender, products, selectedOption]);

  return (
    <StateContext.Provider
      value={{
        products,
        getProducts,
        filteredProducts,
        posts,
        getPosts,
        post,
        getPost,
        categories,
        setCategories,
        genders,
        setGenders,
        product,
        setProduct,
        getProduct,
        selectedCategory,
        setSelectedCategory,
        selectedGender,
        setSelectedGender,
        selectedOption,
        setSelectedOption,
        options,
        cart,
        setCart,
        error,
        setError,
        addCart,
        userResponse,
        setUserResponse,
        facebookResponse,
        setFacebookResponse,
        facebookUser,
        setFacebookUser,
        getFacebookUser,
        deleteItemCart,
        deleteCart,
        movil,
        setMovil,
        logOutVisible,
        setLogOutVisible
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export function AppContext() {
  return useContext(StateContext);
}
