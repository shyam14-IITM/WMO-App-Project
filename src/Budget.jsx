import './Budget.css'

const Budget = ({isDark}) => {
    return ( 
        <div className={isDark?"dark-Budget Budget":"Budget"}>
            <div className="graph-div">
                <div>
                    <img src="chart.png" alt="" />
                </div>
                <div className="emi">
                    <h4>Installments</h4>
                    <div className="items">
                        
                        <div className="item">
                            iPhone 16 Pro <span>$200</span>
                        </div>
                        <div className="item">
                            Samsung TV-SM2304
                        </div>

                        
                    </div>
                </div>
                    <div className='upcoming'>
                        <h5>Upcoming Expenditures</h5>
                        <input type="text" placeholder='Add an item' /> &nbsp; &nbsp; <button>Add</button>
                        <div className='item'>
                            Macbook Air 
                        </div>
                        <div className='item'>
                            Electricity bill
                        </div>
                        
                    </div>
                    <div className="LastMon">
                        <h5>Last Month</h5>
                        <div className="item">
                            Spent: $2048
                        </div>
                        <div className='item'>
                            Saved: $1534
                        </div>
                    </div>
                
            </div>
            <div className='info'>
                <div className='msges'>
                    <h5 id="blnce">Balance Updates</h5>
                   <div >
                    $500 credited to acn XXX890
                </div>
                </div>
                
                <div className='expend'>
                    <h5>Expenditures</h5>
                    <h5>Recent</h5>
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