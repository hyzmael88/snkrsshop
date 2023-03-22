import React, { useEffect, useState } from "react";
import { BsFillXCircleFill, BsX, BsXLg } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from 'next/link';
import { AppContext } from "../context/StateContext";
import Cart from "./Cart/Cart";
import Search from "./Navbar/Search";

function Navbar() {
  const { facebookUser, setFacebookUser, getFacebookUser,
     setGender, movil, setMovil,
     logOutVisible, setLogOutVisible} = AppContext();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("facebookUser"));
    console.log(storedData);
    setUser(storedData);
    if (typeof window !== "undefined" && storedData?.cart == undefined) {
      console.log("entre");
      getFacebookUser(storedData?.id).then((result) => {
        if (result) {
          setFacebookUser(result);
          setUser(result);
          localStorage.setItem("facebookUser", JSON.stringify(result));
        }
      });
    } else {
      setCart(storedData.cart);
    }
  }, [facebookUser, typeof window !== "undefined" && window.location.pathname]);
  

  const logOut = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div>
      <div className="hidden lg:flex lg:flex-row h-20 w-full justify-between items-center border-b-2 drop-shadow-xl font-semibold ">
        <Link href="/">
          <div className="ml-4 text-xl">Mis Tennis</div>
        </Link>
        <div className="flex flex-row uppercase">
          <Link href='/Store' >
          <span className="">Store</span>
          </Link>
          
          
          <Link href="/Magazine">
            <span className="ml-4">Magazine</span>
          </Link>
        </div>
        <div className="flex flex-row items-center mr-8">
          <Search/>
          {user ? (
            <p className="flex flex-row items-center justify-center relative"
            onClick={() => setLogOutVisible(!logOutVisible)}
            >
              <img
                src={user?.picture ? user.picture : user.picture.data.url}
                alt="Profile picture"
                className="w-[30px] h-[30px]  rounded-full ml-4 mt-1 mr-3"
              />
              {user.name}
              {
                logOutVisible?(
                  <p className="absolute top-12 left-12 bg-white w-[150px] text-center text-red-500 flex flex-row justify-center uppercase rounded-lg cursor-pointer" onClick={logOut}><BsFillXCircleFill className="text-lg mr-2 "/>log out</p>
                ):
                  null
                
              }
            </p>
            
          ) : (
            <Link href="/Auth">
              <div className="ml-4 uppercase cursor-pointer">
                Iniciar Sesion
              </div>
            </Link>
          )}
          

          <div>
            <Cart cart={cart} />
          </div>
          {/* <FiMenu className='text-3xl'/> */}
        </div>
      </div>

      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row h-20 w-full justify-between items-center border-b-2 drop-shadow-xl font-semibold lg:hidden">
          <Link href="/">
            <div className="ml-4 text-xl">Mis Tennis</div>
          </Link>
          <div className="flex flex-row items-center mr-4">
            <Cart cart={cart} />
            <div className="border-2 border-black ml-4 rounded-full p-2.5">
              {!movil ? (
                <FiMenu
                  className={"text-3xl cursor-pointer"}
                  onClick={() => setMovil(true)}
                />
              ) : (
                <BsX
                  className=" text-3xl cursor-pointer "
                  onClick={() => setMovil(false)}
                />
              )}
            </div>
          </div>
        </div>
        {
          movil?
          <div className="flex flex-col w-full h-full items-center text-center">
            
              <Link href='/Store' className="my-6"  onClick={() => setMovil(false) }>
              <span className="my-4 uppercase ">Store</span>
              </Link>
              <Link href='/Magazine' className="my-6"  onClick={() => setMovil(false) }>
              <span className="my-4 uppercase ">Magazine</span>
              </Link>
              <span className="my-4 uppercase ">{user ? (
            <p className="flex flex-row items-center justify-center" onClick={() => setLogOutVisible(!logOutVisible)}>
              <img
                src={user?.picture ? user.picture : user.picture.data.url}
                alt="Profile picture"
                className="w-[30px] h-[30px]  rounded-full  mt-1 mr-2"
              />
              {user.name}
              
            </p>
          ) : (
            <Link href="/Auth" className="my-6"  onClick={() => setMovil(false) }>
              <div className="ml-4 uppercase cursor-pointer">
                Iniciar Sesion
              </div>
            </Link>
          )}</span>
          {
                logOutVisible?(
                  <span className="my-4 uppercase flex flex-row text-red-500" onClick={logOut}><BsFillXCircleFill className="text-lg mr-2 "/>log out</span>
                ):
                  null
                
              }
              <Search
              
              />
            
            </div>
            :null
        }
      </div>
    </div>
  );
}

export default Navbar;
