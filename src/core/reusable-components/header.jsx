import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <Link to="/home" className="btn btn-primary m-2">Home</Link>
            <Link to="/about" className="btn btn-info m-2">About</Link>
            <Link to="/contact" className="btn btn-success m-2">Contact</Link>  
        </div>
    )
}