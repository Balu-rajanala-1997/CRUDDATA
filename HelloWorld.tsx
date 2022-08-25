import * as React from 'react'
import RouteComponent from "./RouteComponent";
import HelloWorld1 from "./HelloWorld1";
import HelloWorld2 from "./HelloWorld2";
import { Button, Grid } from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link, Routes, Route, MemoryRouter } from "react-router-dom";
import { FC, ComponentState, ReactElement } from "react";
import { IInputs } from "./generated/ManifestTypes.d";
// import { useContext } from "react";
// import EditFormContext from './Contexts/EditFormContext';


export interface ImainRouter {
  context: ComponentFramework.Context<IInputs>;
}

//const {  allFormsData, updateAllFormsData }:any = React.useContext(EditFormContext);  

export interface IReactComponentState extends React.ComponentState, ImainRouter {}

 const HelloWorld: FC<IReactComponentState> = (props:ImainRouter): ReactElement => {
  return (    
    <div className="container">
       <MemoryRouter>
       <Grid className="main">
         <h3>Welcome to zelarsoft</h3>
         <Grid>
           <Link to="/img"><img style={{marginTop: "10px"}} alt="Zelar Soft" src="./images/1631323893584.jpg" width="150" height="110" /></Link>
         </Grid>
         <Grid>
           <Link to="/user" className="btn">
             <Button variant="contained" color="primary">
             <PersonAddIcon/>&nbsp; Login
             </Button>
           </Link>
         </Grid>
       </Grid>
            <Routes>
              <Route path="/user" element={<RouteComponent />} />
              <Route path="/password" element={<HelloWorld1 />} />
              <Route path="/email" element={<HelloWorld2 />} />
              <Route path="/img" element={<img src="./images/1631323893584.jpg" width="300" height="300"/>} />
            </Routes> 
       </MemoryRouter>
    </div>         
  )
}
export default HelloWorld