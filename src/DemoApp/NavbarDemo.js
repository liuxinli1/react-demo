import 'materialize-css';
import './Demo.css'
//import { Navbar } from 'react-materialize';

function navbarDemo(){
    return(
    <div>
        <nav>
            <div className="nav-wrapper blue navbarFont">
            <a href="#" className="brand-logo">Navbar</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down navbarFont">
                <li><a href="https://github.com/liuxinli1">Github</a></li>
            </ul>
            </div>
        </nav>
    </div>
    );
}

export default navbarDemo;