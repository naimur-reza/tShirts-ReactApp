import React, { useEffect, useState } from "react";
import Shops from "../Shop/Shops";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";
import Swal from 'sweetalert2'
const Home = () => {
  const [cart, setCart] = useState([]);
  const Data = useLoaderData();
  const tData = JSON.parse(Data);
  const handleAddToCart = (id) => {
      const exist = cart.find(pd=> pd._id === id);
      if (exist){
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          return;
      }
    const addItem = tData.find((pd) => pd._id === id);
    setCart([...cart, addItem]);
  };
  const handleRemove = (id) => {

    const restItem = cart.filter((pd) => pd._id !== id);
    setCart(restItem)
  };
  return (
    <div className="flex justify-between py-10">
      <div>
        <Shops
          handleRemove={handleRemove}
          handleAddToCart={handleAddToCart}
          tData={tData}
        />
      </div>
      <div>
        <Cart cart={cart} handleRemove={handleRemove} />
      </div>
    </div>
  );
};

export default Home;
