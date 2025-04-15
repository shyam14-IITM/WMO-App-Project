import "./TaskList.css"
import Task from "./Task.jsx"
import {motion,AnimatePresence} from 'framer-motion';
import { useRef, useState } from "react";
import {v4 as uuidv4} from 'uuid';
const TaskList = ({isDark}) => {
    const [inpValue, setInpValue] = useState(""); // value for controlled input element
    const [tasks, setTasks] = useState([]);// list of tasks
    
    const handleRemove=(key) => { //  function for removal of tasks

        setTasks(
                tasks.filter((task, i) => {
                return !(task.key == key);
            })
        );
    
}


    

    return (
        <div className={isDark?"dark-Tasks Tasks":"Tasks"}>
            <h2>Your Tasks</h2>

            <input type="text" value={inpValue} onChange={(event) => {
                setInpValue(event.target.value);
            }} placeholder="Enter a new task" />

            <button onClick={() => {
                setTasks((prevTasks) => {
                    return [...prevTasks, {label:inpValue,key:uuidv4()}];
                })
                setInpValue("");
                console.log(tasks);
            }} >Add</button>
            

            <AnimatePresence>
            {
                tasks.map((task, idx) => {
                    return (
                        <motion.div   className="Task" 
                            key={task.key}
                            initial={{opacity:0,y:-25}}
                            animate={{opacity:1,y:0}}
                            exit={{opacity:0, scale:0}}
                            transition={{duration:0.2}}
                        >
                            <h4>{task.label}</h4>
                            <div className="task-det">
                                <p>Here are some details details about the task </p>
                                <div className="task-btns">
                                    <button onClick={()=>{handleRemove(task.key)}}> Remove </button>
                                    <button>Mark as done</button>
                                </div>

                            </div>

                        </motion.div>)
                })
            }


            </AnimatePresence>
        </div>
        
    );

}

export default TaskList;