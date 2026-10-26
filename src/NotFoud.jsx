import { Link } from "react-router";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>La pagina no funciona</p>
            <Link to={"/"}>Back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;