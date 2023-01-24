import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';
import "./CartsDiv.css";
import MapChart from './MapChart';
import { Paper, Switch, ThemeProvider } from "@material-ui/core";

/**chart data start */
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'No of running days',
      },
    },
  };
  export const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'No of Non-running days',
      },
    },
  };
  export const options3 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Charging cycle duration',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

export default function CartsDiv() {
  return (
    <div className='ChartAgMain p-3 b-3'>
        
        <div class="container p-3 b-3">
            <div className="row mapbox " >

                <div className="col-sm p-3 b-3" >
                  <div className='insideForIndside' style={{boxShadow:"1px 1px 5px 0px #c4b5b5"}}>
                  <span className='spanner'>Map view-No of battery issues reported</span>
                  <div className='topSelectBox'>
                  <select className="register__date3Sg" >
                      <option value="">Selct issue</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                  </select>
                  <select className="register__date3Sg" >
                      <option value="">Selct city/state level</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                  </select>
                  <div className='toggle__span'>
                    <span style={{fontWeight:"bold"}}>Count</span>
                    <Switch  />
                  </div>
                  </div>
                  </div>
                  <MapChart className="svg"/>
                </div>
               
                <div className='col-sm p-2 b-2'>
               
                <div className='row p-2 b-2'>
                    <div class="col-sm " style={{boxShadow:"1px 1px 5px 0px #c4b5b5"}}>
                      <Bar options={options3} data={data} />
                    </div>
                 </div>
               
                
                  <div className='row tager' style={{boxShadow:"1px 1px 5px 0px #c4b5b5"}}>
                    <div className="col-sm" ><Bar options={options1} data={data} /></div>
                    <div className="col-sm" ><Bar options={options2} data={data} /></div>
                
                </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}