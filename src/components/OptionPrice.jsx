import React from 'react';
import Feature from './Feature';

const OptionPrice = ({ option }) => {
    const { name, price, duration, features } = option || {};
    return (
        <div className='bg-blue-500 rounded-md p-4 text-white flex flex-col items-center'>
            <h2 className=''>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-xl'>/{duration}</span>
            </h2>
            <h4 className='text-2xl text-yellow-200'>{name}</h4>
            
            <div className='border-t border-red-500 mt-2 py-2 flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='btn btn-circle btn-accent w-full'>Buy Now</button>
        </div>
    );
};

export default OptionPrice;