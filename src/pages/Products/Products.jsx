import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        try {
            let response = await fetch('https://fakestoreapi.com/products');
            let data = await response.json();
            console.log(data);
            setProducts(data);
        }
        catch (error) {
            console.log(error);
        }
        
    }

    return <div>

      <h3 className="bg-primary text-white p-3">Products List</h3>
      <div>
      
      {(products && products.length !=0 ? 

       products.map((value, index) => {
        return <React.Fragment key={index}>
            <img src={value.image} width={100} height={100} alt={value.title} />
            <p>{value.title}</p>
            <p>{value.price}</p>
            <Link to={`/viewproducts/${value.id}`}>View Details</Link>
            <hr />  
        </React.Fragment>
       }): <p>Products not found</p>)}
      </div>

    </div>
}