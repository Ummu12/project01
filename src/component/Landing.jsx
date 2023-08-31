import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Card,CardContent,Grid,Button,TextField } from "@mui/material"; 
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Todoimg } from "./Todoimg";

export const Landing=()=>{
    return(
        <BrowserRouter>
       <Nav/>
       <br />
       <br />
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/todoimg" element={<Todoimg/>}/>
        </Routes>
        </BrowserRouter>
    )
}