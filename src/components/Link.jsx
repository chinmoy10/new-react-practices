import PropTypes from 'prop-types';
import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mb-2 md:mr-5'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;