import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const {count} = useContext(CategoryContext)
    return (
        <div>
             <h1>This is Header : {count}</h1>
        </div>
    );
};

export default Header;