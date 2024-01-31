// import { useFormContext } from "../FormContext"; 
import { useContext } from "react"; 
import FormContext from "../FormContext";
import "../App.css";

function FormBuilder() {
  const {
    formfield,
    errors,
    handleInputChange,
    handleCheckboxChange,
    handleRadioChange,
    handleDropdownChange,
    handleSubmit,
  } = useContext(FormContext);

  console.log("formfield",formfield);
  return (
    <div className="Form">
      <form className="formbuild" onSubmit={handleSubmit}>
        <div className="name">
          <label for="name" style={{ marginRight: "2rem" }}>
            Enter Full Name:
          </label>
          <input
            type="text"
            name="name"
            value={formfield.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="gender">
          <label htmlFor="male" style={{ marginRight: "2rem" }}>
            Gender:
          </label>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formfield.gender === "male"}
            onChange={handleRadioChange}
          />

          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formfield.gender === "female"}
            onChange={handleRadioChange}
          />
          {errors.gender && <div className="error">{errors.gender}</div>}
        </div>
        <div className="Checkbox">
          <input
            type="checkbox"
            id="Bike"
            name="Bike"
            value="Bike"
            checked={formfield.checkBox.includes("Bike")}
            onChange={handleCheckboxChange}
          />
          <label for="vehicle1"> I have a bike</label>
          <br></br>
          <input
            type="checkbox"
            id="Car"
            name="Car"
            value="Car"
            checked={formfield.checkBox.includes("Car")}
            onChange={handleCheckboxChange}
          />
          <label for="vehicle2"> I have a car</label>
          <br></br>
          <input
            type="checkbox"
            id="Boat"
            name="Boat"
            value="Boat"
            checked={formfield.checkBox.includes("Boat")}
            onChange={handleCheckboxChange}
          /> 
          
          <label for="vehicle3"> I have a boat</label> 
          
          <br></br> 
          {errors.checkBox && <div className="error">{errors.checkBox}</div>}
          
        </div>
        
        <div className="Country">
          <label htmlFor="country" style={{ marginRight: "2rem" }}>
            Choose your country:
          </label>
          <select
            name="country"
            id="country"
            value={formfield.country} 
            
            onChange={handleDropdownChange}
          > 
          
            
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Australia">Australia</option>
          </select>
          {errors.country && <div className="error">{errors.country}</div>}
        </div>
        <div>
          <button type="submit" className="Submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormBuilder;
