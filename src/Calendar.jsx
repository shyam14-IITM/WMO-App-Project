import { useState } from "react";
import "./Calendar.css"
import Dates from "./Dates.jsx";

const Calendar = ({isDark}) => {
// Building the calendar

    const [ currDate,setCurrDate] =useState(new Date());  // 
    const[ currMonth, setCurrMonth]= useState(currDate.getMonth());// storing current month
    const [month, setMonth] = useState(currMonth); // a variable to store months initialised with the current
    const[ currYear, setCurrYear]= useState(currDate.getFullYear()); // storing current year
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      let lastDateofMonth= new Date(currYear,month+1,0).getDate();// last date of month in view
      let lastDateofPrevMonth= new Date(currYear,month,0).getDate();
      
    let firstDayofMonth= new Date(currYear,month,1).getDay();
    let lastDayofMonth= new Date(currYear,month,lastDateofMonth).getDay();

    
    //creating the display of a particular month on the calendar
      let datesArr=[];
      for (let i = 1; i <=lastDateofMonth; i++) { // to include the dates of the month in view
       
       datesArr.push(i);
      }
      for(let i=lastDateofPrevMonth;i> (lastDateofPrevMonth-firstDayofMonth)  ;i--){// to include the some dates of previous month(low opacity)
        datesArr.unshift(i);
      }
      for(let i=1;i<=(6-lastDayofMonth);i++){
        datesArr.push(i);
      }

    return (
        
        <div className={isDark?"dark-Cal Calendar ":"Calendar"}>

            <header>
                <div className="current-month">
                   {months[month]} {currYear}
                </div>
                <div className="btns">
                    <button  onClick={()=>{
                        if (month==0){
                            setCurrYear(currYear-1);
                        }
                        
                        setMonth(month==0?11:(month-1));
                        
                    }}> &lt;  </button> <button onClick={()=>{
                        if (month==11){
                            setCurrYear(currYear+1);
                        }
                        setMonth(month==11?(0):(month+1));
                        
                    }}> &gt; </button>
                </div>

            </header>


            <div >
                <ul className="days">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                 <Dates month={month} currMonth={currMonth} currDate={currDate.getDate()} firstDayofMonth={firstDayofMonth} lastDateofMonth={lastDateofMonth} datesArr={datesArr}></Dates>
            </div>

        </div>
    );
}

export default Calendar;