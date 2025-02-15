import React, { createContext, useEffect, useState } from "react";
//import { products } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

function ShopContextProvider(props) {
  const [search, setSearch] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = "$";
  const delivery_charges = 10;

  // ADDING ITEMS TO CART

  const addToCart = async (itemId, color) => {
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
    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, color },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  // UPDATING THE QUANTITY OF CART ITEMS
  const updateQuantity = async (itemId, color, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][color] = quantity;
    setCartItems(cartData);

    // ADD TO DB
    try {
      await axios.post(
        backendUrl + "/api/cart/update",
        { itemId, color, quantity },
        { headers: { token } }
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
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

    return totalCount;
  };

  // GETTING TOTAL AMOUNT CART

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };
  const getProductData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list/");

      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  // GETTING USER CART
  const getUserCart = async (token) => {
    try {
      if (token) {
        let response = await axios.post(backendUrl + "/api/cart/get",{}, {headers: { token}});

        if (response.data.success) {
          console.log(response.data.cartData)
          setCartItems(response.data.cartData);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {

    if (!token && localStorage.getItem("token")) {
     
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }

  }, [token]);

  useEffect(() => {
    getProductData();
  }, []);

  const value = {
    navigate,
    products,
    search,
    setSearch,
    currency,
    delivery_charges,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    updateQuantity,
    token,
    setToken,
    backendUrl,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
