import "./Home.css"
import Calendar from "./Calendar.jsx";
import TaskList from "./TaskList.jsx";
import Budget from "./Budget.jsx";
import { useState } from "react";
import Nav from "./Nav.jsx";


const Home = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [isDark, setIsDark] = useState(false);
  return (
  
    <div className={isDark?"dark-home Home":"Home"}>
        <Nav isDark={isDark}></Nav>
      <nav>
        <h1 id="head">Personal Dashboard</h1>
        <div style={{ fontWeight: 100 }}>
          <i className="ri-sun-cloudy-line"> </i> 31°C Partly Cloudy
        </div>

        <i onClick={() => {
          setMenuClicked(!menuClicked);

        }} className="ri-more-2-line">

          {menuClicked &&
            <div onClick={()=>{
              setIsDark(!isDark);
              console.log(isDark);
            }} className="menu">
              {isDark?< i class="ri-sun-line"></i>:<img src="moon-line.svg" alt="" />}
              <span> {isDark?"Switch to Light Theme":"Switch to Dark Theme"} </span>

            </div>
          }
        </i>


      </nav>

      <div className="container-1">
        
        
        <Calendar isDark={isDark}></Calendar>
        <TaskList isDark={isDark}></TaskList>
      </div>
      <div className="container-2">
        <Budget isDark={isDark}></Budget>
      </div>

    </div>
  );
}

export default Home;