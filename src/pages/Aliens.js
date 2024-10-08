import { Outlet } from "react-router-dom";
import './aliens.css';


const Aliens = () => {
    return (
        <>
            <h1>Aliens</h1>
            <Outlet></Outlet>
        </>
    );
}
export default Aliens;