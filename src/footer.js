import React from "react";

const Footer =(props)=>{
    return(
        <div>
            <center>
                <h3>&copy; Education solutions {props.month}{props.year}</h3>
            </center>
        </div>
    )
}
export default Footer;