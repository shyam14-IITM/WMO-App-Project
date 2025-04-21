import "./Nav.css"

const Nav = ({isDark}) => {
    return ( 
        <div className= {isDark?"Nav dark-nav":"Nav"}>
            <a id="active" href="">Dashboard</a>
            <a href="">Course</a>
            <a href="">Settings</a> 
            <a href="">History</a>
            <a href="">Support</a>
           
        </div>
     );
}
 
export default Nav;