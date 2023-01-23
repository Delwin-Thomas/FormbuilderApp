import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Fields(props) {
    const forms = useSelector((state) => state.inputdata.forms);
    
   function inputTypeHelperFunc() {
       
        const { type, value, id } = props.object;
        console.log(props.object)
        if (type === "text") {
          return (
            <input
              type="text"
              className="frInputText"
              required={props.object.required==="true"?true:false}
            />
          );
        }
         else if (type === "number") {
          return (
            <input
              type="number"
              className="frInputText"

            />
          );
        }
    
        return (
          <div className="frYesNo">
            <div className="frRadio">
              <input
                name={id}
                type="radio"
                value="yes"
      
              />
              <span>Yes</span>
            </div>
            <div className="frRadio">
              <input
                name={id}
                type="radio"
                value="no"
                
              />
              <span>No</span>
            </div>
          </div>
        );
      }
    

  return (
    <div className="frOneSection">
        <div className="frInput">
          <label>
            <span className="frQuestion">{props.object.title}</span>
            {inputTypeHelperFunc()}
          </label>
        </div>
    </div>
  );
}

export default Fields;
