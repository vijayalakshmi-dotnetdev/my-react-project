import React, { useEffect } from 'react';
export default function Child() {

    useEffect(() => {
        console.log("Child component mounted");

        const intervalId = setInterval(() => {
            console.log("Child component is still mounted");
        }, 1000);
                    

        return () => {
            console.log("Child component unmounted");
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div>
            <h2>Child Component</h2>
        </div>
    );
}
