import { createContext,  useState } from 'react';

const FormContext = createContext({
  formData:[]
}); 

export default FormContext

// export const useFormContext = () => {
//   return useContext(FormContext);
// };

export const FormProvider = ({ children }) => {
  const [formfield, setFormfield] = useState({
    name: "",
    gender: "",
    checkBox: [],
    country: " "
  }); 
  const [submittedData, setSubmitedData]= useState([]) 
  
  console.log("sub",submittedData)

  const [errors, setErrors] = useState({
    name: "",
    gender: "",
    country: "",
    checkBox :[]
  }); 



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormfield((prevFormfield) => ({
      ...prevFormfield,
      [name]: value
    }));
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormfield((prevFormfield) => {
      const updatedCheckBox = checked
        ? [...prevFormfield.checkBox, name]
        : prevFormfield.checkBox.filter((item) => item !== name);
      return {
        ...prevFormfield,
        checkBox: updatedCheckBox
      };
    }); 
    setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ""
      }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormfield((prevFormfield) => ({
      ...prevFormfield,
      [name]: value
    }));
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormfield((prevFormfield) => ({
      ...prevFormfield,
      [name]: value
    }));
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
     const formDataJSON= JSON.stringify(formfield) 
     setSubmitedData((prev)=>[...prev, formDataJSON])

    const validationErrors = {};

    if (!formfield.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formfield.gender) {
      validationErrors.gender = "Gender is required";
    }

    if (!formfield.country) {
      validationErrors.country = "Country is required";
    } 

    if (formfield.checkBox.length===0){
        validationErrors.checkBox = "CheckBox is required";

    } 
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormfield({
      name: "",
      gender: "",
      checkBox: [],
      country: ""
    });
    setErrors({
      name: "",
      gender: "",
      country: "",
      checkBox:[]

    });
  };

  return (
    <FormContext.Provider
      value={{
        formfield,
        errors,
        handleInputChange,
        handleCheckboxChange,
        handleRadioChange,
        handleDropdownChange,
        handleSubmit
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
