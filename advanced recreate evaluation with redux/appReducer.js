import { createStore, connect } from 'react-redux'
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


const availableCoursesReducer =(state=data, action)=>{
    switch(action.type){
        case 'SET_COURSES':
            return action.payload
        default:
            return state
    }
}






export default function appReducer() {
    
}