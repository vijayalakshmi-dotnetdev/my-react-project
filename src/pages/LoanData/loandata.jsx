import { useSelector,useDispatch } from "react-redux";
import { calculateinterest,calcinterstfor9 } from "./loandata.slice";
import React from "react";

export default function Loandata(){

    const dispatch = useDispatch();

    const result = useSelector((state)=> state?.loandata?.result)

    return <div>
        <hr/>
        <h5>Loan Info</h5>
        <p>Principle amount: {result}</p>
        <p>Interest Percentage: 8% </p>
        <button onClick={()=> dispatch(calculateinterest(1000))}>Calculate Ineterest</button>
         <button onClick={()=> dispatch(calcinterstfor9(1000))}>Ineterest for 9%</button>
    </div>
}