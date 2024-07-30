import React from "react";
import { navdata } from "../data";
import { Navbar } from "./Navbar";

export const Navlist=()=>{
    return(
        <React.Fragment>
            {
               navdata.map((item)=>
            <Navbar item={item}/>)
            }
        </React.Fragment>
    )
}