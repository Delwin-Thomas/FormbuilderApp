import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addInput, createForm, deleteForm, formSelect, saveForm } from "../reducers/inputs";
function Forms() {
  var forms = useSelector((state) => state.inputdata.forms);
  var data;
  data = JSON.parse(localStorage.getItem("forms"));
  data = data ? data : [];
  const dispatch = useDispatch();
  function clickHandler(item) {
   
    dispatch(formSelect(item));
  }
  function deleteHandler(e,item) {
    dispatch(
      deleteForm(item)
    );
    e.stopPropagation();
  }
  return (
    <form>
      <div className='form_created'>
        <h2>Forms</h2>
        {data.length<1&&<h2>No forms created!</h2>}
        {data.map((item, idx) => {
          console.log(item);

          return (
            <div className='formSelect' onClick={() => clickHandler(item)}>
              <div className='fbInput'>
                <label>
                  <span className='question'>Heading:</span>

                  <input
                    name='question'
                    className='inputQuestion'
                    type='text'
                    value={item.formName}
                    
                  />
                </label>
                <label>
                  <span className='question'>Creator:</span>

                  <input
                    name='question'
                    className='inputQuestion'
                    type='text'
                    value={item.formCreator}
               
                  />
                </label>
                <button
                  type='button'
                  className='deleteBttn'
                   onClick={(e)=>deleteHandler(e,item)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default Forms;
