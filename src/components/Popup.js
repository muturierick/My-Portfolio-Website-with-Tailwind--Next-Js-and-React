import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PopUp = () =>  (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div> Contact has been copied to Clipboard</div>
  </Popup>
);

export default PopUp