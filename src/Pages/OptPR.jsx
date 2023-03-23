
import React, { useState } from "react";
import "../Css/OptPR.css";

function OptPR()
{

return(
 <>
<div className="Heading" ><h1>Optimal Page Replacement</h1></div>
<div className="Frames">
    <label>
        Number of Frames : 
        <input
          type="Number"
        //   value={}
        //   onChange={}
        ></input>
        
      </label>
    
</div>
<div className="PageRefrences">
    <label>
        Reference String : 
        <input
          type="Text"
        //   value={}
        //   onChange={}
        ></input>
        
      </label>
    
</div>
</>
);

};  

export default OptPR;


