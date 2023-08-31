import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Card,CardContent,Grid,Button,TextField } from "@mui/material"; 
import { Link } from "react-router-dom";
import { Navdata } from "../NavData";

export const NavItem=({item})=>{
    return (
   <Grid item xs={item.xs}>
    <Link to={item.path}>
        <Button variant="contained" fullWidth color="warning">
            {item.title}

        </Button>
    </Link>

   </Grid>
    )
}