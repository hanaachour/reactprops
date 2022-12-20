import React from "react";
import hana from "../photohana.png";
function Photo(props){
    return(
        <div>
            <img src={hana} alt="image"></img>
            {props.children}
        </div>
    )
};
export default Photo;