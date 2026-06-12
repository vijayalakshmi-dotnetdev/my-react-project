import { useState } from "react";
import Child from "./Child";

export default function Parent() {

    const [showChild, setShowChild] = useState(true);

    return (
        <div>
            <h1>Parent Component</h1>
            <div>
                {showChild && <Child />}
            </div>
            <button onClick={()=>setShowChild(false)}>Hide</button>
        </div>
    );
}