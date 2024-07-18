import { combineReducers,createStore, connect } from 'react-redux'

const availableCourses = [];


const availableCoursesReducer = (state=availableCourses, action)=>{
    switch(action.type){
        case 'SET_COURSES':
            for(let i=0; i<action.payload.length; i++){
                state.push(action.payload[i]);
            }
            return state;
        case 'ADD_COURSE':
            state.push(action.payload);
            return state;
        case 'REMOVE_COURSE':
            const index = state.findIndex(course=>course.id === action.payload.id);
            state.splice(index, 1);
            return state;
        default:
            return state
    }
}

const selectedCourses = [];

const selectedCoursesReducer = (state=selectedCourses, action)=>{
    switch(action.type){
        case 'ADD_SELECTED_COURSE':
            state.push(action.payload);
            return state;
        case 'REMOVE_SELECTED_COURSE':
            const index = state.findIndex(course=>course.id === action.payload.id);
            state.splice(index, 1);
            return state;
        default:
            return state
    }
}

const creditsReducer = (state=0, action)=>{
    switch(action.type){
        case 'ADD_CREDITS':
            return state + action.payload;
        case 'REMOVE_CREDITS':
            return state - action.payload;
        default:
            return state;
    }
}





const rootReducer = combineReducers({
    available: availableCoursesReducer,
    selected: selectedCoursesReducer,
    credits: creditsReducer
  });

export default rootReducer;