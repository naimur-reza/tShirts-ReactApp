import React from 'react';

const SingleCard = ({pd , handleAddToCart}) => {
    const {picture ,gender, name , price, _id } = pd;

    return (
        <div className='border-2  rounded-md shadow-md p-3 w-64 text-center space-y-3 hover:-translate-y-1 duration-300'>
            <img className='w-28 mx-auto' src={picture} alt="" />
            <h1 className='font-semibold text-lg'>Name: {name}</h1>
            <p className='text-md font-semibold'>Price: ${price}</p>
            <p>Gender: {gender}</p>
            <button onClick={()=> handleAddToCart(_id)} className=' btn'>Add To Cart</button>
        </div>
    );
};

export default SingleCard;