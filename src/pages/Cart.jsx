import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import Footer from "../components/Footer";
import CartTotal from "../components/CartTotal";
import { FaMinus, FaPlus, FaRegWindowClose } from "react-icons/fa";

const Cart = () => {
  const {
    navigate,
    cartItems,
    products,
    currency,
    getCartCount,
    updateQuantity,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const [quantities, setQuantities] = useState({});

  const displayItems = () => {
    if (products.length > 0) {
      const tempData = [];
      const initialQuantities = {};

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              color: item,
              quantity: cartItems[items][item],
            });
            initialQuantities[`${items}-${item}`] = cartItems[items][item];
          }
        }
      }

      setCartData(tempData);
      setQuantities(initialQuantities);
    }
  };

  useEffect(() => {
    displayItems();
  }, [cartItems, products]);

  const increment = (id, color) => {
    const key = `${id}-${color}`;
    const newValue = quantities[key] + 1;
    setQuantities((prev) => ({ ...prev, [key]: newValue }));
    updateQuantity(id, color, newValue);
  };
  const decrement = (id, color) => {
    const key = `${id}-${color}`;

    if (quantities[key] > 1) {
      const newValue = quantities[key] - 1;
      setQuantities((prev) => ({ ...prev, [key]: newValue }));
      updateQuantity(id, color, newValue);
    }
  };

  return (
    <section>
      <div className="bg-primary mb-16">
        <div className="max-padd-container">
          {/* TITLE  */}
          <div className="flexStart gap-x-4 ">
            <Title title1={"Cart"} title2={"List"} title1Styles={"h3"} />
            <h5 className="medium-15 text-gray-30 relative bottom-1.5 ">
              Items({getCartCount()})
            </h5>
          </div>
          {/* CONTAINER  */}
          <div className="mt-6">
            {cartData.map((item, i) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              const key = `${item._id}-${item.color}`;
              return (
                <div key={i} className="rounded-lg mb-3 bg-white p-3 ">
                  <div className="gap-x-3 items-center flex ">
                    <div className=" flex items-start  ga-6">
                      <img
                        src={productData.image[0]}
                        alt="imageProduct"
                        className="w-20 sm:w-18 rounded"
                      />
                    </div>
                    <div className="flex flex-col w-full ">
                      <div className="flexBetween  ">
                        <h5 className="h5  !my-0 line-clamp-1">
                          {productData.name}
                        </h5>
                        <FaRegWindowClose
                          className="cursor-pointer text-secondary "
                          onClick={() =>
                            updateQuantity(item._id, item.color, 0)
                          }
                        />
                      </div>
                      <p className="bold-14 my-0.5">{item.color}</p>
                      <div className="flexBetween ">
                        <div className="flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary  ">
                          <button
                            onClick={() => decrement(item._id, item.color)}
                            className="text-secondary p-1.5 bg-white rounded-full shadow-md"
                          >
                            {" "}
                            <FaMinus className="text-xs" />
                          </button>
                          <p className="px-2">{quantities[key]}</p>
                          <button
                            onClick={() => increment(item._id, item.color)}
                            className="text-secondary p-1.5 bg-white rounded-full shadow-md"
                          >
                            <FaPlus className="text-xs" />
                          </button>
                        </div>
                        <h4 className="h4">
                          {currency}
                          {productData.price}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex my-20  ">
            <div className="w-full my-5 sm:w-[450px] ">
              <CartTotal />

              <button
                onClick={() => navigate("/place-order")}
                className=" btn-secondary mt-7"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Cart;
