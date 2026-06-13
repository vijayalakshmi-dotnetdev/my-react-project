import React from 'react';
import { useParams, useLocation } from 'react-router';
export default function ViewProducts() {

    const location = useLocation();
    console.log("location===>", location);

    const params = useParams();
    const searchParams = new URLSearchParams(location.search);
    console.log("params===>", params);
    console.log("params.id===>", params.id);
    console.log("params.name===>", params.name);
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    console.log("id===>", id);
    console.log("name===>", name);


    return <div>
        <h3 className="bg-primary text-white p-3">View Products</h3>
        <div>
            <p className="text-center">View Products Details</p>
            <p className="text-center">Product ID: {id != null ? id : params.id}</p>
            <p className="text-center">Product Name: {name != null ? name : params.name}</p>
        </div>
    </div>
}