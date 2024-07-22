import react from 'react';
import "./styles.css";
import { useDispatch, createStore, useSelector } from 'react-redux';
import rootReducer from './redux/appReducer';
import { getCourses } from './getCourses';

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

const addCredits = (credits)=>{
    return {
        type: 'ADD_CREDITS',
        payload: credits
    }
}
const removeCredits = (credits)=>{
    return {
        type: 'REMOVE_CREDITS',
        payload: credits
    }
}

const setCourses = (courses)=>{
    return {
        type: 'SET_COURSES',
        payload: courses
    }
}

const addCourse = (course)=>{
    return {
        type: 'ADD_COURSE',
        payload: course
    }
}
const removeCourse = (course)=>{
    return {
        type: 'REMOVE_COURSE',
        payload: course
    }
}

const addSelectedCourse = (course)=>{
    return {
        type: 'ADD_SELECTED_COURSE',
        payload: course
    }
}
const removeSelectedCourse = (course)=>{
    return {
        type: 'REMOVE_SELECTED_COURSE',
        payload: course
    }
}

export default function App() {
    //place in another file
    const store = createStore(rootReducer);
    const units = useSelector(state=>state.credits);
    const availableCourses = useSelector(state=>state.available);
    const selectedCourses = useSelector(state=>state.selected);
    const dispatch = useDispatch();
    // const data_via_server = await getCourses();
    // store.dispatch(setCourses(data_via_server));
    store.dispatch(setCourses(data));
    //remove store doc
    return (
        <div>
<div class="layout">
      <div class="box" id="available_courses">
          <h3>avaliable courses</h3>
          {availableCourses.map(course=>(
              <div class="course" key={course.id} onClick={()=>{
                store.dispatch(addCredits(course.unit));
                store.dispatch(addSelectedCourse(course));
                store.dispatch(removeCourse(course));
                }}>
                  <h4>{course.courseName}</h4>
                  <p>{course.unit} units</p>
                    <p>{course.required ? 'compulsory' : 'elective'}</p>
              </div>
          ))}
      </div>
      
      <div class="box" id="selected_courses">
          <h3>selected courses</h3>
            {selectedCourses.map(course=>(
                <div class="course" key={course.id} onClick={()=>{
                    store.dispatch(addCourse(course));
                    store.dispatch(removeSelectedCourse(course));
                    store.dispatch(removeCredits(course.unit))
                    }}>
                    <h4>{course.courseName}</h4>
                    <p>{course.unit} units</p>
                        <p>{course.required ? 'compulsory' : 'elective'}</p>
                </div>
            ))}
      </div>
      
      
      
      </div>

      <footer>
      <span>
      <p>total credits: {units}</p>
        <button >select</button>
      </span>
      </footer>
      </div>
    )
}

