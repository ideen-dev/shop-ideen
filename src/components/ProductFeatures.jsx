import React from "react";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbArrowBack, TbArrowBackUp, TbTruckDelivery } from "react-icons/tb";

const ProductFeatures = () => {
  return (
    <div className="bg-primary rounded-xl mt-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl">
        <div className="flexCenter gap-x-4 p-2 rounded-3xl  ">
          <div className="text-3xl">
            <TbArrowBackUp className="mb-3 text-yellow-500" />
          </div>
          <div>
            <h4 className="h4 capitalize">Easy return</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              iste deleniti sapiente aut vero perspiciatis accusamus ipsam
              facilis! Deleniti, provident.
            </p>
          </div>
        </div>
        <div className="flexCenter gap-x-4 p-2 rounded-3xl  ">
          <div className="text-3xl">
            <TbTruckDelivery className="mb-3 text-red-500" />
          </div>
          <div>
            <h4 className="h4 capitalize">Fast Delivery </h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil 
              iste deleniti sapiente aut vero perspiciatis accusamus ipsam
              facilis! Deleniti, provident.
            </p>
          </div>
        </div>
        <div className="flexCenter gap-x-4 p-2 rounded-3xl  ">
          <div className="text-3xl">
            <RiSecurePaymentLine className="mb-3 text-blue-500" />
          </div>
          <div>
            <h4 className="h4 capitalize">Secure Payment</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              iste deleniti sapiente aut vero perspiciatis accusamus ipsam
              facilis! Deleniti, provident.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
