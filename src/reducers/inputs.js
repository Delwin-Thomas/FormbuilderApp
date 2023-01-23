import { createSlice } from "@reduxjs/toolkit";
var FORMS = JSON.parse(localStorage.getItem("forms"));
var SAVEDFORMS = JSON.parse(localStorage.getItem("savedforms"));
const initialState = {
  forms: FORMS ? FORMS : [],
  Data: [],
  selectedItem: { formInputs: [] },
};
export const inputData = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    createForm: (state, action) => {
      state.forms = [...state.forms, action.payload];
    },
    formSelect: (state, action) => {
      state.selectedItem = { ...action.payload };
    },
    saveForm: (state, action) => {
      if (FORMS) {
        FORMS = FORMS.filter((form) => form.formId !== action.payload.formid);
      }
      var temp = state.forms.filter(
        (form) => form.formId === action.payload.formid
      );

      FORMS = FORMS ? [...FORMS, ...temp] : [...temp];
      localStorage.setItem("forms", JSON.stringify(FORMS));
    },
    saveFinalForm: (state, action) => {
      if (SAVEDFORMS) {
        SAVEDFORMS = SAVEDFORMS.filter(
          (form) => form.formId !== action.payload.formid
        );
      }
      var temp = state.forms.filter(
        (form) => form.formId === action.payload.formid
      );

      SAVEDFORMS = SAVEDFORMS ? [...SAVEDFORMS, ...temp] : [...temp];
      localStorage.setItem("savedforms", JSON.stringify(SAVEDFORMS));
    },
    addInput: (state, action) => {
      state.forms = state.forms.filter((form) => {
        if (form.formId === action.payload.formId) {
          form.formInputs = [...form.formInputs, action.payload];
        }
        return form;
      });
    },
    titleChange: (state, action) => {
      state.forms = state.forms.filter((form) => {
        if (form.formId === action.payload.formid) {
          form.formInputs.map((forminput) => {
            if (forminput.id === action.payload.inputid) {
              forminput.title = action.payload.title;
            }
          });
        }
        return form;
      });
    },
    typeChange: (state, action) => {
      state.forms = state.forms.filter((form) => {
        if (form.formId === action.payload.formid) {
          form.formInputs.map((forminput) => {
            if (forminput.id === action.payload.inputid) {
              forminput.type = action.payload.type;
            }
          });
        }
        return form;
      });
    },
    requiredChange: (state, action) => {
      state.forms = state.forms.filter((form) => {
        if (form.formId === action.payload.formid) {
          form.formInputs.map((forminput) => {
            if (forminput.id === action.payload.inputid) {
              console.log("hello");
              forminput.required = action.payload.required;
              console.log(action.payload.required, forminput.required);
            }
          });
        }
        return form;
      });
    },

    deleteInput: (state, action) => {
      state.forms = state.forms.filter((form) => {
        if (form.formId === action.payload.formid) {
          form.formInputs = form.formInputs.filter((forminput) => {
            if (forminput.id !== action.payload.inputid) {
              return forminput;
            }
          });
        }
        return form;
      });
    },
    deleteForm: (state, action) => {
      FORMS = FORMS.filter((form) => {
        console.log(action.payload.formId, form.formId);
        if (form.formId !== action.payload.formId) {
          return form;
        }
      });
      state.forms = [...FORMS];
     
      state.selectedItem = { formInputs: [] } ;
      console.log(state.selectedItem);
      localStorage.setItem("forms", JSON.stringify(FORMS));
    },
  },
});

export const {
  addInput,
  createForm,
  titleChange,
  typeChange,
  deleteInput,
  requiredChange,
  saveForm,
  formSelect,
  saveFinalForm,
  deleteForm,
} = inputData.actions;
export default inputData.reducer;
