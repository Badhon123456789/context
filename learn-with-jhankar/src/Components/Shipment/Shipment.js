import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const {count, setCount} = useContext(CategoryContext)
    return (
        <div>
            <h1>This is Shipment : {count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment from Ship</button>

        </div>
    );
};

export default Shipment;