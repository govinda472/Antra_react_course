import react from 'react';
import "./styles.css";
import { connect, createStore } from 'react-redux';

import rootReducer from './appReducer';

export default function App() {

    const store = createStore(rootReducer);








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

