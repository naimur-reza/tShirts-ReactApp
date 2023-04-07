import React from 'react';

const Cart = ({handleAddToCart , cart , handleRemove}) => {
    return (
        <div className='border space-y-3 p-5 bg-gray-400 rounded-lg text-white'>
            <p>Total Item : {cart.length}</p>
            {
                cart.map(pd => <p className='bg-white w-36 flex items-center justify-between text-black p-3 rounded-md'>{pd.name} <span className='bg-gray-700 text-white px-[10px] py-1   rounded-full' onClick={()=> handleRemove(pd._id)}>X</span></p> )
            }
            
        </div>
    );
};

export default Cart;