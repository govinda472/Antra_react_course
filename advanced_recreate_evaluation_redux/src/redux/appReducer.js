import { combineReducers,createStore, connect } from 'react-redux'
//add the keyword initi to it


const availableCoursesReducer = (state=[], action)=>{
    switch(action.type){
        case 'SET_COURSES':
            return {...state, payload};
        case 'ADD_COURSE':;
            return {...state, payload};
        case 'REMOVE_COURSE':
            const index = state.findIndex(course=>course.id === action.payload.id);
            state.splice(index, 1);
            return state;
        default:
            return state
    }
}



const selectedCoursesReducer = (state=[], action)=>{
    switch(action.type){
        case 'ADD_SELECTED_COURSE':
            return {...state, payload}
        case 'REMOVE_SELECTED_COURSE':
            const index = state.findIndex(course=>course.id === action.payload.id);
            state.splice(index, 1);
            return state;
        default:
            return state
    }
}
// reutrn {...state, payload}
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