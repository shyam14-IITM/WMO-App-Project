import { useState } from "react";
import "./Calendar.css"
import Dates from "./Dates.jsx";

const Calendar = ({isDark}) => {
    const [ currDate,setCurrDate] =useState(new Date());
    const[ currMonth, setCurrMonth]= useState(currDate.getMonth());
    const [month, setMonth] = useState(currMonth);
    const[ currYear, setCurrYear]= useState(currDate.getFullYear());
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      let lastDateofMonth= new Date(currYear,month+1,0).getDate();
      let lastDateofPrevMonth= new Date(currYear,month,0).getDate();
      
    let firstDayofMonth= new Date(currYear,month,1).getDay();
    
      let datesArr=[];
      for (let i = 1; i <=lastDateofMonth; i++) {
       
       datesArr.push(i);
      }
      for(let i=lastDateofPrevMonth;i> (lastDateofPrevMonth-firstDayofMonth)  ;i--){
        datesArr.unshift(i);
      }
      for(let i=1;i<=(35-lastDateofMonth-firstDayofMonth);i++){
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