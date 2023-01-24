import React from 'react'
import logo from "./assets/logo.png";
import "./Navbars.css";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { IconButton } from "@material-ui/core";
import SelectBox from './SelectBox';
function Navbar() {
  return (
      <>
        <nav className='header'>
          <div class="nav_logo ">  
            <img className="header__logo" src={logo} />
          </div>
          <div class="nav_menu text-center">
            <h4>Single vin view</h4>
          </div>
          <div className='nav_logos'>
                    <IconButton>
                    <PeopleAltIcon />
                    </IconButton>
          </div>
        </nav>
        {/** nav bar ended*/}

        <div className='selectDateSection'>
          <form className="form1 p-3 b-3">
           <div className='formWrapper'>
        <SelectBox options={['A', 'B','C','D']}  name="vin" 
                    label="Select VIN" />
          </div>
        </form>
        </div>
        </>
  )
}

export default Navbar