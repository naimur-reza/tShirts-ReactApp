import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';

const Shops = ({tData ,handleAddToCart , handleRemove}) => {

    return (<>

        <div className='grid grid-cols-3 gap-2 '>
         {
             tData.map(pd => <SingleCard handleRemove={handleRemove} handleAddToCart={handleAddToCart} pd={pd} key={pd._id}/>)
            }
        </div>
            </>
    );
};

export default Shops;