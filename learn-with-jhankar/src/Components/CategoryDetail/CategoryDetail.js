import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {count} = useContext(CategoryContext)
    const {name, category} = props.product
    return (
        <div>
            <h3>This is your Category Detail has : {count}</h3>
            <p>selected product: {name}</p>
        </div>
    );
};

export default CategoryDetail;