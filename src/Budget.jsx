import './Budget.css'

const Budget = ({isDark}) => {
    return ( 
        <div className={isDark?"dark-Budget Budget":"Budget"}>
            <div className="graph-div">

            </div>
            <div className='info'>
                <div className='msges'>
                    <h3 id="blnce">Balance Updates</h3>
                   <div >
                    $500 credited to acn XXX890
                </div>
                </div>
                
                <div className='expend'>
                    <h3>Expenditures</h3>
                    Recent
                    <ul>
                        <li>$130 at ZMart</li>
                        <li>$33 on Amazon</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Budget;