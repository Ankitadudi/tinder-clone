import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
function Header({ backButton }){
     const history = useHistory();
     return(
          //BEM
     <div className="header"> 
     {backButton ? (
          <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon  fontSize="large" className="header__icon" />
          </IconButton>
     ): (
          <IconButton>
         <PersonIcon className="header_icon" fontSize="large"/>

         </IconButton>
     )}
          
         <Link to="/"><img 
          className="header_logo"
         src="https://bit.ly/3vCYdV0"alt="tinder logo"/>
         </Link>
         
         <Link to="/chat">
         <IconButton>
         <ForumIcon className="header_icon" fontSize="large"/>
         </IconButton>
         </Link>
         
      </div>
      

     )


}
export default Header