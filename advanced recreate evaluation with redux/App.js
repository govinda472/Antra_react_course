import react from 'react';
import "./styles.css";
import { useDispatch, createStore, useSelector } from 'react-redux';
import rootReducer from './appReducer';


const data = [{
    "id":1,
    "courseName":"React",
    "unit":3,
    "required":true
},
{
    "id":2,
    "courseName":"Redux",
    "unit":2,
    "required":true
}
{
    "id":3,
    "courseName":"Node",
    "unit":3,
    "required":true
},
{
    "id":4,
    "courseName":"MongoDB",
    "unit":2,
    "required":false
},
{
    "id":5,
    "courseName":"Express",
    "unit":2,
    "required":false
}
];


export default function App() {

    const store = createStore(rootReducer);
    const units = useSelector(state=>state.credits);
    const availableCourses = useSelector(state=>state.available);
    const selectedCourses = useSelector(state=>state.selected);

    return (
        <div>
<div class="layout">
      
      
    
      <div class="box" id="available_courses">
          <h3>avaliable courses</h3>
      </div>
      
      <div class="box" id="selected_courses">
          <h3>selected courses</h3>
      </div>
      
      
      
      </div>

      <footer>
      <span>
      <p>total credits:<span id="total_credits">0</span></p>
        <button id="button">select</button>
      </span>
      </footer>
      </div>
    )
}

