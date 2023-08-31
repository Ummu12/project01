import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Card,CardContent,Grid,Button,TextField } from "@mui/material"; 
import { NavItem } from "./NavItem";
import { Navdata } from "../NavData";

export const Nav=()=>{
    
    return (
      <Card>
        <CardContent>
              <Grid container spacing={2}>
                {Navdata.map((item)=>
                  <NavItem item={item}/>
                )}

              </Grid>
        </CardContent>
      </Card>
    )
}