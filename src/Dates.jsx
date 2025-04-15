const dates = ({datesArr,firstDayofMonth,lastDateofMonth,currDate,month, currMonth}) => {
    return (    
        <ul className="dates">
                    {
                        datesArr.map((date,idx)=>{
                            return <li id={month==currMonth  && idx-firstDayofMonth+1==currDate?"currDate":""} className={idx<firstDayofMonth || idx>=lastDateofMonth+firstDayofMonth?"inactive":""} >{date}</li>
                        })
                    }
               

                </ul>
     );
}
 
export default dates;