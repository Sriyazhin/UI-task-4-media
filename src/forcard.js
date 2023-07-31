import React from "react";

const Commoncard = ({titleName}) => {
    return(
        <div className='cardone'>
      <div className='aboutus'>{titleName}</div>
      <div className='paraforcard'>Sample text. Click to select the text box. Click again or double click to start editing the text.</div>
      <div className='morelink'><a href='www.wikipedia.com'>MORE</a> </div>
      <div><hr></hr></div>
    </div>
    );
}
export default Commoncard;