import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export const Navbar=({item})=>{
    return(
        <Link to={item.path}><Button variant="contained"  size="medium" sx={{border:2,borderRadius:5,marginLeft: 20, 
            marginTop: 3, 
            background: '#9b51e0'} } >{item.title}</Button></Link>
    )
}