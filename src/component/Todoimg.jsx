import React,{useState} from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Card,CardContent,Grid,Button,TextField } from "@mui/material"; 
import DownloadingIcon from '@mui/icons-material/Downloading';

export const Todoimg=()=>{
    const[txt,setTxt]=useState('');
    const[data,setData]=useState([])

    const handleAdd=()=>{
        setData([...data,txt])
    };
   
    return (
       <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
              
              <Grid item xs={6}>
                <TextField onChange={(e)=>setTxt(e.target.value)}
                 variant="outlined" 
                fullWidth label="Link Share..."/>
                    </Grid>

                    <Grid item xs={2}>
                 <Button onClick={handleAdd}
                  variant="contained" fullWidth color="warning" style={{height:"55px"}}> 
                 <DownloadingIcon />  Download 
                    </Button>
                    </Grid>

                   <Grid item xs={2}>  </Grid>

                   {data.map((item)=>
                   <Grid item xs={3}>
                    <Card sx={{textAlign:"center"}}>
                        <CardContent>
                          <img src={item} alt="" width={250} height={250} />
                        </CardContent>
                    </Card>
                   </Grid>
                   )}

       </Grid>
    )
}