import React from "react";
import './css/Navbar.css';

const Navbar = (props) => {

    return(
        <div className="nav">
            <div>
                <h1>Markdown Previewer</h1>
            </div>
            <div className="buttons">
                <button className="copy" onClick={props.copyToClipboard}><i class="far fa-clipboard"></i>&nbsp;&nbsp;Copy</button>
                <button className="clear" onClick={props.clear}><i class="fas fa-trash"></i>&nbsp;&nbsp;Clear</button>
            </div>
        </div>
    )
}

export default Navbar;
