import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaCheck, FaHeart, FaStar } from "react-icons/fa";
import { FaStarHalfStroke, FaTruckFast } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
import ProductDescription from "../components/ProductDescription";
import ProductFeatures from "../components/ProductFeatures";
import RelatedProducts from "../components/RelatedProducts";
import Footer from "../components/Footer";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [product, setproduct] = useState(null);
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");

  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId);

    if (selectedProduct) {
      setproduct(selectedProduct);
      setImage(selectedProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!product) {
    return <div> . . . Loading </div>;
  }

  return (
    <div>
      <div className="max-padd-container">
        {/* DATA PRODUCT  */}

        <div className="flex gap-10 flex-col xl:flex-row rounded-2xl p-3 mb-6     ">
          {/* IMAG  */}
          <div className="flex flex-1 gap-x-2 max-w-[477px">
            <div className="flex-1 flexCenter flex-col gap-[7px] flex-wrap">
              {product.image.map((item, i) => (
                <img
                  src={item}
                  alt="prdImg"
                  key={i}
                  className="object-cover aspect-square rounded-lg    "
                />
              ))}
            </div>
            {/* IMAGE PRINCIPAL  */}
            <div className="flex-[4] flex">
              <img src={image} alt="productImg" className="rounded-xl" />
            </div>
          </div>
          {/* PRODUCT INFO */}
          <div className="flex-[1.5] rounded-2xl px-5 py-3 bg-primary">
            <h3 className="h3 leading-none">{product.name}</h3>
            {/* RATING 1 PRICE   */}
            <div className="flex items-baseline gap-x-5 ">
              <div className="flex items-center gap-x-2 text-secondary ">
                <div className="flex gap-x-2 text-secondary  ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span className="medium-14">(135)</span>
              </div>
            </div>
            <h4 className="h4 my-2 ">
              {currency}
              {product.price}.00
            </h4>
            <p className="max-w-[555px]">{product.description}</p>
            <div className="flex flex-col gap-4 my-4 mb-5   ">
              <div className="flex gap-2  ">
                {[...product.colors].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setColor(item)}
                    className={`h-9 w-9 rounded-full flexCenter flexCenter   `}
                    style={{ background: item }}
                  >
                    {item === color ? (
                      <FaCheck
                        className={
                          item === "White" ? "text-black" : "text-white"
                        }
                      />
                    ) : (
                      <></>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-x-4 ">
              <button
                onClick={() => {}}
                className="btn-secondary !rounded-lg sm:w-1/2 flexCenter gap-x-2 capitalize"
              >
                Add to cart
                <TbShoppingBagPlus />
              </button>
              <button className="btn-white !rounded-lg !py-3.5 ">
                <FaHeart />
              </button>
            </div>
            <div className="flex items-cente gap-x-2 mt-3">
              <FaTruckFast className="text-lg" />
              <span className="medium-14">Free Delivery on over 500$</span>
            </div>
            <hr className="my-3 w-2/3 " />
            <div className="mt-2 flex flex-col gap-1 text-gray-30 text-[14px]">
              <p>Autenticy You Can trust</p>
              <p>Enjoy Cash on Delivery for Your Convenience</p>
              <p>Easy Returns and Exchange Within 7 Days</p>
            </div>
          </div>
        </div>
        <ProductDescription />
        <ProductFeatures />
        <RelatedProducts  category={product.category}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Product;
