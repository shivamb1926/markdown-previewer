import React from "react";
import './css/Navbar.css';

const Navbar = (props) => {

    return(
        <div className="nav">
            <div>
                <h1>Markdown Previewer</h1>
            </div>
            <div>
                <button className="copy" onClick={props.copyToClipboard}>Copy</button>
                <button className="clear" onClick={props.clear}>Clear</button>
            </div>
        </div>
    )
}

export default Navbar;
