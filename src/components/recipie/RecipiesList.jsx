import React,{useState,useEffect} from "react";
import axios from "axios";
import { Recipiesitem } from "./RecipiesItem";

export const RecipiesList=()=>{
    const[data,setdata]=useState([])

    const getdata=async()=>{
            const result = await axios.get('https://dummyjson.com/recipes');
                setdata(result.data.recipes);     
    }
    useEffect(()=>{
        getdata();
    },[])

    return(
        <React.Fragment>
          {
            data.map((item)=>
            <Recipiesitem item={item}/>)
          }
        
           
        </React.Fragment>
    )
}
