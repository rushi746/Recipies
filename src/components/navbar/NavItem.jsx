import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export const navitem=({item})=>{
    return(
        <Link to={item.path}><Button variant="contained"  size="large" >{item.title}</Button></Link>
    )
}