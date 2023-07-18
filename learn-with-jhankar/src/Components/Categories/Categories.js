import React, { useContext, useEffect, useState  } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CategoryContext} from '../../App';

const allProducts = [
    { name: "Asus", category: "Laptop" },
    { name: "Hp", category: "Laptop" },
    { name: "Dell", category: "Laptop" },
    { name: "Nokia", category: "Mobile" },
    { name: "Samsung", category: "Mobile" },
    { name: "Iphone", category: "Mobile" },
    { name: "Cannon", category: "Camera" },
    { name: "Nikon", category: "Camera" },
    { name: "Sony", category: "Camera" },
  ];
  

const Categories = () => {
    const {count} = useContext(CategoryContext)
    const [products, setProducts] = useState([])
    useEffect(()=> {
        console.log({count});
        const matchProduct = allProducts.filter(p => p.category === count);
        setProducts(matchProduct);
    }, [count])
    return (
        <div>
            <h2>Select your category : {count}</h2>
            {
                products.map(pd=> <CategoryDetail product={pd}/> )
            }
        </div>
    );
};

export default Categories;