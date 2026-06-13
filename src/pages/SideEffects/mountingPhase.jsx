import React, { useState, useEffect } from 'react';

export default function MountingPhase() {

    const [price, setPrice] = useState(100);
    const [tax, setTax] = useState(price * 3.5 / 100 + price * 3.5 / 100);

    useEffect(() => {

        setTax(price * 3.5 / 100 + price * 3.5 / 100);
                console.log("tax=====>", (price * 3.5 / 100 + price * 3.5 / 100));
                        console.log("price=====>", price);

    }, [price]);

    return (
        <div>
            <h1>Mounting Phase</h1>
            <p>Price: {price}</p>
            <p>Tax: {tax}</p>
            <button onClick={() => setPrice(price + 1)}> Increase Price </button>
        </div>
    );
}