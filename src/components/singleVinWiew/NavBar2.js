import React from 'react'
import "./HomeHeader.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Logo2 from "./assets/logo2.jpg";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';   
import Timeline from './Timeline/Timeline';


/**chart data start */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Battery voltage pattern',
    },
  },
};
export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Battery SoH',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function NavBar2() {
  const [selectedDate, setSelectedDate] = React.useState(new Date().toLocaleString() + "");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    
  return (
    <div className='vin_main'>
    <div class="homeHeader">
      <div class="homeHeaderLogoAndSearch">
        <Link to="/">
          <img src={Logo2} class="homeHeader__logo" alt="Avatar" />
        </Link>
       
      </div>

      <div class="homeHeader__pages">
        <div class="home">
          <h3 className='sig__head'>  Single vin view </h3>
        </div>
      </div>

      <div class="homeHeader__otherIcons">
        <div class="round">         
          <PeopleAltIcon />
        </div>

      </div>
    </div>
    {/** nav bar ended*/}

        <div className='selectDateSection'>
        <form method="post">
        <div class="container p-3 b-3">
            <div class="row">
                <div class="col-sm p-3 b-3" width="100px">
                <select className="register__date3" >
                      <option value="">Selct Model</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                  </select>
            </div>
            <div class="col-sm" style={{marginRight: "-70px"}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
               
                    <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Pik Date"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
               </MuiPickersUtilsProvider>
            </div>
            <div class="col-sm">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
               
                    <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Pik Date"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
               </MuiPickersUtilsProvider>
            </div>
          </div>
         </div>
         </form>
        </div>

        {/** timeline */}
        <div className='vechile_timeline p-3 b-3'>
        <h5 style={{float:"center",marginBottom:"20px"}}><u>Vechile Timeline</u></h5>
          <Timeline  />
        </div>


        {/* chart*/}
        <div className='charter p-3 b-3'>
          
        <div class="container ">
              <div class="row ">
                <div class="col-sm" style={{maxHeight:"300px"}}>
              
                <Line options={options1} data={data} />
             
                </div>
                <div class="col-sm" style={{maxHeight:"300px"}}>
                <Line options={options2} data={data} />
                </div>
                
              </div>
        </div>
        
        </div>  
    </div>
  )
}

export default NavBar2