import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fields from "../componenets/Fields";
import {  saveForm } from "../reducers/inputs";
function FormCreated() {
  var forms = useSelector((state) => state.inputdata.forms);
  const dispatch = useDispatch();
  var formid = forms.length ? forms[forms.length - 1].formId : 0;
  var inputs = [];
  var header
  forms.map((form) => {
    if (form.formId === formid) 
    {
      console.log(form)
      header=form.formName
      inputs = form.formInputs
    };
  });
  function submitHandler(e) {
    dispatch(saveForm({formid:formid}));
    
  }
  return (
    <form onSubmit={(e)=>submitHandler(e)}>
      <div className='form_created'>
        {inputs<1&&<h2>Add Your First Input!</h2>}
       <h2>{header}</h2>

        {inputs.map((input) => {
          return (
            <Fields
              key={input.id}
              object={input}
             
            />
          );
        })}
        {inputs.length > 0 && (
          <button
            type='submit'
            id='add_input_bttn'
           
          >
            Submit & save form
          </button>
        )}
      </div>
    </form>
  );
}

export default FormCreated;
