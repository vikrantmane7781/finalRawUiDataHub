import React from 'react'
import "./NavbarAg.css";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Logo2 from "../singleVinWiew/assets/logo2.jpg";
import { Link } from "react-router-dom";
function NavBarAg() {
  return (
    <div class="homeHeaderAg">
    <div class="homeHeaderLogoAndSearchAg">
      <Link to="/">
        <img src={Logo2} class="homeHeader__logoAg" />
      </Link>
    </div>

    <div class="homeHeader__pagesAg">
      <div class="home">
        <h4 classNam="ag__head">Aggregated View </h4>
      </div>
    </div>

    <div class="homeHeader__otherIconsAg">
      <div class="roundAg">         
        <PeopleAltIcon />
      </div>

    </div>
  </div>
  )
}

export default NavBarAg