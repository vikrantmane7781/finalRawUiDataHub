import React from 'react'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';
  import "./Selectors.css";

function Selectors() {


    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

  return (
    <div className='Selectors'>
         <form method="post">
        <div class="container p-3 b-3">
            <div class="row">
                <div class="col-sm p-3 b-3" width="100px">
                <select className="register__date3S" >
                      <option value="">Selct Vin</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                  </select>
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
            <div class="col-sm p-3 b-3" width="100px">
                <select className="register__date3S" >
                      <option value="">Selct PPL</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                  </select>
            </div>
            <div class="col-sm p-3 b-3" width="100px">
                <select className="register__date3S" >
                      <option value="">Selct PL</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                  </select>
            </div>
          </div>
         </div>
         </form>
    </div>
  )
}

export default Selectors