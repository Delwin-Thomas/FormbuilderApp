import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fields from "../componenets/Fields";
import { addInput, createForm, saveFinalForm, saveForm } from "../reducers/inputs";
function FormsView() {
  var forms = useSelector((state) => state.inputdata.forms);
  var selectedItem = useSelector((state) => state.inputdata.selectedItem);
  const dispatch = useDispatch();
  var data;
  data = JSON.parse(localStorage.getItem("forms"));
  data = data ? data : [];
  function submitHandler(e) {
    dispatch(saveFinalForm({formid:selectedItem.formId}));
  }
  return (
    <form onSubmit={(e)=>submitHandler(e)}>
      <div className='form_created'>
        
       <h2>{selectedItem.formName}</h2>

        {selectedItem.formInputs.map((input) => {
            console.log("ssss",selectedItem.formInputs)
          return (
            <Fields
              key={input.id}
              object={input}
              
            />
          );
        })}
        {selectedItem.formInputs.length > 0 && (
          <button
            type='submit'
            id='add_input_bttn'
          >
            Submit 
          </button>
        )}
      </div>
    </form>
  );
}

export default FormsView;
