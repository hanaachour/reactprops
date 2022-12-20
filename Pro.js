import React from "react";
import PropTypes from "prop-types";
function Pro({fullname,bio,profession,fun}){
    return (
        <div>
            <p style={{color:"red",border:"dotted",borderColor:"black",textDecorationStyle:"solid",backgroundColor:"yellow" }}><h1> My Fullname is : {fullname}</h1></p>
            <p style={{color:"green",border:"double",borderColor:"yellow",textDecorationStyle:"solid",backgroundColor:"beige" }}><h2>Bio : {bio}</h2></p>
            <p style={{color:"blue",border:"dotted",borderColor:"blue",textDecorationStyle:"solid",backgroundColor:"turquoise",padding:"10px" }}><h3>Profession : {profession}</h3></p>
            <button onClick={fun}> ALERT</button>
            
        </div>
    );
}
export default Pro;

Pro.defaultProps = {
    fullname:"Unknown",
    profession: "notdefined",
    bio : "undefined",
}







Pro.propTypes={
    fullname: PropTypes.string,
    Bio : PropTypes.string,
    profession : PropTypes.string,
    fun : PropTypes.func,
};