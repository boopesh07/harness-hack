import React from 'react';
import logo from './center.png';
import './App.css';
import trophy from './trophy3.png';
function App() 
{
  return (
    <div className="App">
      <div class="wrapper">
    <div class="modal modal--congratulations">
        <div class="modal-top">
            <img class="modal-icon u-imgResponsive" src="https://dl.dropboxusercontent.com/s/e1t2hhowjcrs7f5/100daysui_100icon.png" alt="Trophy" />
            <div class="modal-header">Congratulations</div>
            <div class="modal-subheader">You have successfully completed the 100 Days UI Challenge</div>
        </div>
        <div class="modal-bottom">
            <button class="modal-btn u-btn u-btn--share">Share</button>
            <button class="modal-btn u-btn u-btn--success">Have a beer</button>
        </div>
    </div>
</div>
</div>
      /* <header className="App-header">
        <div className= "thala">
        <img src={trophy} className="App-logo" alt="trophy" height="50" width="400"/>
          <h2> "Hai Thala, Congrats " </h2>
          </div>
        <img src={logo} className="App-logo" alt="logo" width="500" height="500"/>
      </header>
    </div> */
    )
  }

export default App;
