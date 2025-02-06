import React, { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import Footer from "../components/Footer";
const PlaceOrder = () => {

const [methodPayment, setMethodPayment] = useState('stripe')




  
    return (
    <div>
      <div className="bg-primary mb-16">
        {/* CONTAINER  */}
        <form className="max-padd-container py-10  ">
          <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
            {/* LIFT SIDE  */}
            <div className="flex flex-1 flex-col gap-3 text-[95%]">
              <Title title1={"Delivery"} title2={"Informations"} />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="ring-1 ring-slite-900/15 p-1 pl-3  rounded-sm bg-white outline-none  w-1/2   "
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="ring-1 ring-slite-900/15 p-1 pl-3  rounded-sm bg-white outline-none  w-1/2   "
                />
              </div>
              <input
                type="text"
                name="email"
                placeholder="Email Adress"
                className="ring-1 ring-slite-900/15 p-1 pl-3  rounded-sm bg-white outline-none    "
              />
              <input
                type="text"
                name="phonenumber"
                placeholder="Phone Number"
                className="ring-1 ring-slite-900/15 p-1 pl-3  rounded-sm bg-white outline-none    "
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                className="ring-1 ring-slite-900/15 p-1 pl-3  rounded-sm bg-white outline-none    "
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="street"
                  placeholder="City"
                  className="ring-1 ring-slite-900/15 p-1 pl-3  rounded-sm bg-white outline-none w-1/2    "
                />
                <input
                  type="text"
                  name="State"
                  placeholder="State"
                  className="ring-1 ring-slite-900/15 p-1 pl-3  rounded-sm bg-white outline-none w-1/2    "
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="Zip Code"
                  placeholder="Zip"
                  className="ring-1 ring-slite-900/15 p-1 pl-3  rounded-sm bg-white outline-none w-1/2    "
                />
                <input
                  type="text"
                  name="Country"
                  placeholder="Country"
                  className="ring-1 ring-slite-900/15 p-1 pl-3  rounded-sm bg-white outline-none w-1/2    "
                />
              </div>
            </div>
            {/* RIGHT SIDE   */}
            <div className="flex flex-1 flex-col">
              <CartTotal />
              {/* PAYMENT METHOD */}
              <div className="my-6">
                <h3 className="bold-20 mb-5">
                  Payment <span>Method</span>
                </h3>
                <div className="flex gap-3">
                  <div onClick={()=>setMethodPayment("stripe")} className={`${methodPayment==="stripe" ? "btn-dark":"btn-white"} cursor-pointer`}>Stripe</div>
                  <div onClick={()=>setMethodPayment("cashOnDelivery")} className={`${methodPayment==="cashOnDelivery" ? "btn-dark":"btn-white"} cursor-pointer`}>Cash on delivery</div>
                </div>
              </div>
              <div>
                <button type="submit" className="btn-secondary">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
