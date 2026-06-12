import React, { useState, useEffect } from 'react';

export default function Products() {

    const [productslist, setProductsList] = useState();
    const [productId, setProductId] = useState(1);

    useEffect(() => {
        const controller = new AbortController();
        getApicall(controller);
        return () => {
            controller.abort();
        }
    }, [productId]);

    const getApicall = async (controller) => {

        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`, { signal: controller.signal });
            const data = await response.json();
            console.log("Products data:", data);
            setProductsList(data);
        }
        catch (error) {
            if (error.name !== "AbortError") {
                console.log("Error fetching products:", error);
            }
        }
    }

    return (
        <div>
            <h1>Products Details</h1>

            <img src={productslist?.image} height={200} width={200} alt={productslist?.title} />
            <p> Product Name: {productslist?.title}</p>
            <p> Product Price: {productslist?.price}</p>
            <div>
                <button disabled={productId === 1} onClick={() => setProductId(productId - 1)}>Previous</button>
                <button style={{ marginLeft: '10px' }} onClick={() => setProductId(productId + 1)}>Next</button>
            </div>
        </div>
    );
}   