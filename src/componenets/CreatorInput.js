import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addInput,
  createForm,
  deleteInput,
  requiredChange,
  titleChange,
  typeChange,
} from "../reducers/inputs";
function CreatorInput(props) {
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.inputdata.forms);
  function setTitleHandler(value) {
    dispatch(
      titleChange({
        formid: props.data.formid,
        inputid: props.data.inputid,
        title: value,
      })
    );
  }
  function setTypeHandler(value) {
    dispatch(
      typeChange({
        formid: props.data.formid,
        inputid: props.data.inputid,
        type: value,
      })
    );
  }
 
  function setRequired(value) {
    
    dispatch(
      requiredChange({
        formid: props.data.formid,
        inputid: props.data.inputid,
        required: value,
      })
    );
  }
  function deleteHandler() {
    dispatch(
      deleteInput({ formid: props.data.formid, inputid: props.data.inputid })
    );
  }

  return (
    <div>
      <div className='fbInput'>
        <div>
        <label>
          <span className='question'>Title:</span>
          <input
            name='question'
            className='inputQuestion'
            type='text'
            value={props.data.title}
            onChange={(e) => setTitleHandler(e.target.value)}
          />
        </label>
        </div>
        <div>
          <label>
            <span className='question'>Type:</span>
            <select
              className='inputQuestion'
              name='type'
              value={props.data.type}
              onChange={(e) => setTypeHandler(e.target.value)}
            >
              <option value='text'>Text</option>
              <option value='yes_no'>Yes or No</option>
              <option value='number'>Number</option>
            </select>
          </label>
          <label>
          <span className='question'>Mandatory:</span>
          <select
              className='inputQuestion'
              name='type'
              value={props.data.required}
              onChange={(e) => setRequired(e.target.value)}
            >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
          </select>
        </label>
         
          <button type='button' className='deleteBttn' onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatorInput;
