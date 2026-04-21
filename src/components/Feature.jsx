import React from 'react';
import { FaCheck } from "react-icons/fa6";

const Feature = ({ feature }) => {
    return (
        <>
            <p className='flex items-center gap-2'> <FaCheck className='text-red-500' /> {feature}</p>
        </>
    );
};

export default Feature;