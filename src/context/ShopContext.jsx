import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

function ShopContextProvider(props) {
  const [search, setSearch] = useState([]);
  // const navigate=useNavigate()
  const currency = "$";
  const delivery_charges = 10;
  const [cartItems, setCartItems] = useState({});

  // ADDING ITEMS TO CART

  const addToCart = (itemId, color) => {
    if (!color) {
      toast.error("Please select the color first");
      return;
    }

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][color]) {
        cartData[itemId][color] += 1;
      } else {
        cartData[itemId][color] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][color] = 1;
    }
    setCartItems(cartData);
  };

  // GETTEING TOTAL CART COUNT

  const getCartCount = () => {
    let totalCount = 0;
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          try {
            if (cartItems[items][item] > 0) {
              totalCount += cartItems[items][item];
            }
          } catch (error) {}
        }
    }
    totalCount+=1;

    return totalCount;
  };

  useEffect(() => {

    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    search,
    setSearch,
    currency,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
