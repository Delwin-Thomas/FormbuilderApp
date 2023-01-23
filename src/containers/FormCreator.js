import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatorInput from "../componenets/CreatorInput";
import { addInput, createForm } from "../reducers/inputs";
function FormCreator() {
  const dispatch = useDispatch();
  const [formName, setFormName] = useState("");
  const [formCreator, setFormCreator] = useState("");
  var inputs = [];
  let inputid;
  const forms = useSelector((state) => state.inputdata.forms);
  var formid = forms.length ? forms[forms.length - 1].formId : 0;
  forms.map((form) => {
    if (form.formId === formid) inputs = form.formInputs;
  });
  function formCreateHandler() {
    inputid = 0;
    dispatch(
      createForm({ formId: formid + 1, formName: formName,formCreator:formCreator, formInputs: [] })
    );
  }
  function addInputHandler(e) {
    try {
      inputid =
        forms[formid - 1].formInputs[forms[formid - 1].formInputs.length - 1]
          .id + 1;
    } catch {
      inputid = 1;
    }

    dispatch(
      addInput({
        formId: formid,
        id: inputid,
        formId: formid,
        title: "",
        type: "text",
        required: false,
        name: "",
      })
    );
  }

  return (
    <div className='form_creator'>
      <h2>Create your Form!</h2>
      
        <div className='form_title'>
          <span className='question'>Heading:</span>
          <input
            name='question'
            className='inputQuestion'
            
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <span className='question'>Creator:</span>
          <input
            name='question'
            className='inputQuestion'
           
            value={formCreator}
            onChange={(e) => setFormCreator(e.target.value)}
          />
          <button
            type='button'
            className='subInputBttn'
            onClick={formCreateHandler}
          >
            Create Form
          </button>
        </div>
      
      {inputs.map((item, idx) => {
        return (
          <CreatorInput
            key={idx}
            data={{
              formid: formid,
              inputid: item.id,
              title: item.title,
              type: item.type,
              required: item.required,
            }}
          ></CreatorInput>
        );
      })}

      

      {forms.length >0 && (
        <button
          type='button'
          id='add_input_bttn'
          onClick={(e) => addInputHandler(e)}
          
        >
          Add input
        </button>
      )}
    </div>
  );
}

export default FormCreator;
