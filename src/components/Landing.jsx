import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navlist } from "./navbar/NavList";
import { RecipiesList } from "./recipie/RecipiesList";



export const Landing=()=>{
    return(
       <BrowserRouter>
       <Navlist/>
       <Routes>
        <Route path="/recipie/recipieslist" element={<RecipiesList/>}/>
       </Routes>
       </BrowserRouter>
    )
}