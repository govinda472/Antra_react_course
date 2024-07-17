import {createStore} from "redux";

const reducer = (state, action) => {
	swtich (action.type) {
		case "ADD":
			state = state + action.payload;
			break;
		case "subtract":
			state = state - action.payload;
			break;
	}
	return state;
}

const store = createStore(reducer,1);

store.dispatch({
type: "ADD",
payload: 10
)}

store.dispatch({
type: "subtract",
payload: 5
)}






