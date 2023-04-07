import React from 'react';

const Cart = ({handleAddToCart , cart , handleRemove}) => {
    return (
        <div className='border w-52 space-y-3 p-5 bg-gray-400 rounded-lg text-white'>
            <h1 className={cart.length <= 0 ? 'isLow' : 'isHigh'}>Order Summery</h1>
            <p>Total Item : {cart.length}</p>
            {

                cart.map(pd => <p className='bg-white w-40 flex items-center justify-between text-black p-3 rounded-md'>{pd.name} <span className='bg-gray-700 text-white px-[10px] cursor-pointer py-1   rounded-full' onClick={()=> handleRemove(pd._id)}>X</span></p> )
            }
            {
                cart.length<=0 && <p className=''>Cart Is Empty</p>
            }
            
        </div>
    );
};

export default Cart;